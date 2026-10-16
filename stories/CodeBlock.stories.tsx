import type { Meta, StoryObj } from "@storybook/nextjs";
import { CodeBlock } from "zeroruntime-component-book";

const SAMPLE = `'use strict';

// Increase max listeners for event emitters
require('events').EventEmitter.defaultMaxListeners = 100;

const gulp = require('gulp');
const util = require('./build/lib/util');
const path = require('path');
const compilation = require('./build/lib/compilation');

// Fast compile for development time
gulp.task('clean-client', util.rimraf('out'));
gulp.task('compile-client', ['clean-client'], compilation.compileTask('out', false));
gulp.task('watch-client', ['clean-client'], compilation.watchTask('out', false));`;

const meta = {
  title: "CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
  args: { code: SAMPLE },
  decorators: [(Story) => <div className="w-[576px] max-w-full"><Story /></div>],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {};
export const Expanded: Story = { args: { defaultExpanded: true } };
export const Short: Story = { args: { code: "const agent = await zrt.agents.create({ name: 'Support' });" } };
export const NoCopy: Story = { args: { showCopy: false } };
