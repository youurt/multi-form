<template>
  <div class="editor">
    <h4 class="heading mb-4 pb-1">{{ pagesMapping.editPage.title }}</h4>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <b-icon
            icon="type-bold"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <b-icon
            icon="type-italic"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <b-icon
            icon="type-strikethrough
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <b-icon
            icon="type-underline
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <b-icon
            icon="code
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <b-icon
            icon="paragraph
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          <b-icon
            icon="type-h1
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          <b-icon
            icon="type-h2
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          <b-icon
            icon="type-h3
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <b-icon
            icon="list-ul
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <b-icon
            icon="list-ol
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <b-icon
            icon="chat-left-quote
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <b-icon
            icon="file-code
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button class="menubar__button" @click="commands.horizontal_rule">
          <b-icon
            icon="hr
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button class="menubar__button" @click="commands.undo">
          <b-icon
            icon="arrow-counterclockwise
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>

        <button class="menubar__button" @click="commands.redo">
          <b-icon
            icon="arrow-clockwise
"
            scale="1"
            variant="dark"
            class="fa-long-arrow-right"
          />
        </button>
      </div>
    </editor-menu-bar>
    <br />
    <!-- <div class="border border-dark rounded">
     
    </div> -->
    <editor-content class="editor__content " :editor="editor" />
    <div class="row justify-content-center">
      <ButtonLeft @click.native="prevButton" />
      <ButtonRight @click.native="nextButton" />
    </div>
  </div>
</template>

<script>
import pagesMapping from '../Mappings/pagesMapping';
import ButtonLeft from '../PageElements/ButtonLeft';
import ButtonRight from '../PageElements/ButtonRight';
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions';
export default {
  props: { state: Object },
  components: {
    EditorContent,
    EditorMenuBar,
    ButtonLeft,
    ButtonRight,
  },
  data() {
    return {
      pagesMapping,
      htmlData: { next: 5 },
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: '',
      }),
    };
  },
  methods: {
    nextButton() {
      this.$emit('form-service3', {
        ...this.htmlData,
        html: this.editor.getHTML(),
      });
    },
    prevButton() {
      this.htmlData = {
        ...this.htmlData,
        next: 3,
        html: this.editor.getHTML(),
      };
      this.$emit('form-service3', this.htmlData);
    },
  },
  mounted() {
    this.htmlData = { ...this.state, next: 5, html: this.editor.getHTML() };
    this.editor.setContent({
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'First block ', marks: [{ type: 'bold' }] },
            { type: 'text', text: '\n \n' },
            { type: 'text', text: this.state.fname },
          ],
        },
      ],
    });
  },
};
</script>

<style scoped></style>
