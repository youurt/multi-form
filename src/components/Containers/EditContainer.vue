<template>
  <div class="editor">
    <h4 class="heading mb-4 pb-1">{{ pagesMapping.editPage.title }}</h4>
    <editor-menu-bar :editor="editor" v-slot="{ commands }">
      <div class="menubar">
        <button @click="commands.bold">
          <b-icon icon="type-bold" scale="1" variant="dark" />
        </button>

        <button @click="commands.italic">
          <b-icon icon="type-italic" scale="1" variant="dark" />
        </button>

        <button @click="commands.strike">
          <b-icon icon="type-strikethrough" scale="1" variant="dark" />
        </button>

        <button @click="commands.underline">
          <b-icon icon="type-underline" scale="1" variant="dark" />
        </button>

        <button @click="commands.code">
          <b-icon icon="code" scale="1" variant="dark" />
        </button>

        <button @click="commands.paragraph">
          <b-icon icon="paragraph" scale="1" variant="dark" />
        </button>

        <button @click="commands.heading({ level: 1 })">
          <b-icon icon="type-h1" scale="1" variant="dark" />
        </button>

        <button @click="commands.heading({ level: 2 })">
          <b-icon icon="type-h2" scale="1" variant="dark" />
        </button>

        <button @click="commands.heading({ level: 3 })">
          <b-icon icon="type-h3" scale="1" variant="dark" />
        </button>

        <button @click="commands.bullet_list">
          <b-icon icon="list-ul" scale="1" variant="dark" />
        </button>

        <button @click="commands.ordered_list">
          <b-icon icon="list-ol" scale="1" variant="dark" />
        </button>

        <button @click="commands.blockquote">
          <b-icon icon="chat-left-quote" scale="1" variant="dark" />
        </button>

        <button @click="commands.code_block">
          <b-icon icon="file-code" scale="1" variant="dark" />
        </button>

        <button @click="commands.horizontal_rule">
          <b-icon icon="hr" scale="1" variant="dark" />
        </button>

        <button @click="commands.undo">
          <b-icon icon="arrow-counterclockwise" scale="1" variant="dark" />
        </button>

        <button @click="commands.redo">
          <b-icon icon="arrow-clockwise" scale="1" variant="dark" />
        </button>
      </div>
    </editor-menu-bar>
    <br />
    <editor-content :editor="editor" />
    <div class="row justify-content-center">
      <ButtonLeft @click.native="prevButton" />
      <ButtonRight @click.native="nextButton" />
    </div>
  </div>
</template>

<script>
import pagesMapping from '../../mappings/pagesMapping';
import ButtonLeft from '../Elements/ButtonLeft';
import ButtonRight from '../Elements/ButtonRight';
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
        content: `
          <h2>
            Hallo ComputerRepair24.com Team!
          </h2>
          <p>
            wir haben ein Problem und brauchen Ihre hilfe! 
          </p>
          Dieses sind die häufigsten Probleme, die auftreten:
          <ul>
            <li>
              Problem 1
            </li>
            <li>
              Problem 2 
            </li>
          </ul>
          <p>
            Wir hoffen, dass Sie uns bald helfen können. 
          </p>
          <blockquote>
            ${this.state.fname} ${this.state.lname}  
            <br />
            ${this.state.cname}
          </blockquote>
        `,
      }),
    };
  },
  methods: {
    nextButton() {
      this.$emit('edit-page', {
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
      this.$emit('edit-page', this.htmlData);
    },
  },
  mounted() {
    this.htmlData = { ...this.state, next: 5, html: this.editor.getHTML() };
  },
};
</script>

<style scoped></style>
