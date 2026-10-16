import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { FileDropzone, FileItem, type FileItemState } from "zeroruntime-component-book";

const CAPTION = "Up to 10 files\nPDF, JPEG or PNG less than 5MB";

const meta = {
  title: "FileDropzone",
  component: FileDropzone,
  tags: ["autodocs"],
  args: { label: "Attachments", caption: CAPTION, onFiles: () => {} },
  decorators: [(Story) => <div className="w-[328px] max-w-full"><Story /></div>],
} satisfies Meta<typeof FileDropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };

// Mirrors the Figma "Upload flow": file list 12px below the zone, rows 8px apart
export const UploadFlow: Story = {
  parameters: { controls: { disable: true } },
  render: function Render() {
    const [files, setFiles] = useState<{ name: string; state: FileItemState; error?: string }[]>([
      { name: "Document.png", state: "uploading" },
      { name: "Document 3.pdf", state: "complete" },
      { name: "Document 4.pdf", state: "uploaded" },
      { name: "Document 2.png", state: "error", error: "File exceeds 5mb size limit" },
    ]);
    const remove = (name: string) => setFiles((f) => f.filter((x) => x.name !== name));

    return (
      <div className="flex flex-col gap-(--space-12)">
        <FileDropzone
          label="Attachments"
          caption={CAPTION}
          onFiles={(added) => setFiles((f) => [...f, ...added.map((x) => ({ name: x.name, state: "uploaded" as const }))])}
        />
        <div className="flex flex-col gap-(--space-8)">
          {files.map((file) => (
            <FileItem
              key={file.name}
              {...file}
              onCancel={() => remove(file.name)}
              onRemove={() => remove(file.name)}
            />
          ))}
        </div>
      </div>
    );
  },
};
