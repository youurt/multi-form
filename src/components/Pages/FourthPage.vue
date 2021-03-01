<template>
  <div class="editor">
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
      <button class="btn btn-secondary prev mx-2" @click="prevButton">
        <span
          ><b-icon
            icon="arrow-left"
            scale="1"
            variant="light"
            class="fa-long-arrow-left"/></span
        >Back
      </button>
      <button class="btn btn-blue next mx-2" id="next3" @click="nextButton">
        Next<span
          ><b-icon
            icon="arrow-right"
            scale="1"
            variant="light"
            class="fa-long-arrow-right"
        /></span>
      </button>
    </div>
  </div>
</template>

<script>
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
  },
  data() {
    return {
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

        `,
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
  // beforeDestroy() {
  //   this.editor.destroy();
  // },
};
</script>

<style scoped>
.progress {
  height: 13px;
  width: 350px;
  margin: 10px 20px;
  background-color: #fff176;
}

.progress-bar {
  background-color: #fbc02d;
}

.count {
  width: 350px;
}

.fit-image {
  width: 100%;
  object-fit: cover;
}

.card {
  padding-bottom: 20px;
}

.card-header {
  padding: 20px 60px;
}

.card-body {
  display: none;
  padding-left: 55px;
  padding-right: 55px;
}

.card-body.show {
  display: block;
}

.yellow-text {
  color: #fbc02d;
}

.card-block {
  width: 235px;
  border: 1px solid lightgrey;
  padding: 20px;
  border-radius: 5px !important;
  background-color: #fafafa;
  margin-bottom: 30px;
}

.radio {
  display: inline-block;
  border-radius: 0;
  box-sizing: border-box;
  cursor: pointer;
  color: #000;
  font-weight: 500;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
}

.radio:hover {
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);
}

.radio.selected {
  border: 1px solid #f9a825;
  box-shadow: 0px 8px 16px 0px #eeeeee;
  -webkit-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
  -o-filter: grayscale(0%);
  -ms-filter: grayscale(0%);
  filter: grayscale(0%);
}

.fa-check {
  color: #fbc02d;
  border-radius: 50%;
  border: 2px solid #fbc02d;
  padding: 5px;
}

.fa-circle {
  color: #fafafa;
  border-radius: 50%;
  border: 2px solid #bdbdbd;
  padding: 5px 6.155px;
}

.pic,
.pic-0 {
  height: 90px;
  width: 130px;
}

.pic {
  margin-top: 30px;
  margin-bottom: 20px;
}

.btn-blue {
  margin-top: 40px;
  background-color: #1a237e;
  color: #fff;
  width: 28%;
}

.btn-blue:hover {
  background-color: #000;
}

.btn-secondary {
  margin-top: 40px;
  width: 28%;
}

.fa-long-arrow-right {
  float: right;
  margin-top: 4px;
}

.fa-long-arrow-left {
  float: left;
  margin-top: 4px;
}

select,
input,
textarea {
  padding: 8px 15px 8px 15px;
  border-radius: 0px;
  margin-bottom: 25px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  background-color: #eceff1;
  border: 1px solid #ccc;
  font-size: 16px;
  letter-spacing: 1px;
}

select:focus,
input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #fbc02d !important;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}
</style>
