import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import { MyFunComponent } from "./fun/fun";
import { Desciption } from "./description/description";
import { Expertise } from "./expertise/expertise";
import { Journey } from "./journey/journey";

// You will find these components in the "custom components"
// section of the visual editor
// You can also turn on "components only mode" to limit
// editing to only these components
// https://www.builder.io/c/docs/guides/components-only-mode
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: MyFunComponent,
    name: "MyFunComponent",
    inputs: [
      {
        name: "text",
        type: "string",
        defaultValue: "Hello world",
      },
      {
        name: "content",
        type: "string",
      },
    ],
  },
  {
    component: Desciption,
    name: "description",
    inputs: [
      {
        name: "reviews",
        type: "list",
        defaultValue: [
          {
            reviewText: "hello",
          },
        ],
        subFields: [
          {
            name: "heading",
            type: "string",
          },
          {
            name: "mainheading",
            type: "string",
          },
          {
            name: "content",
            type: "string",
          },
          {
            name: "link",
            type: "string",
          },
        ],
      },
    ],
  },
  {
    component: Expertise,
    name: "Expertise",
    inputs: [
      {
        name: "reviews",
        type: "list",
        defaultValue: [
          {
            reviewText: "hello",
          },
        ],
        subFields: [
          {
            name: "heading",
            type: "string",
          },
          {
            name: "content",
            type: "string",
          },
          {
            name: "info",
            type: "string",
          },
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
            required: true,
          },
        ],
      },
    ],
  },
  {
    component: Journey,
    name: "Journey",
    inputs: [
      {
        name: "reviews",
        type: "list",
        defaultValue: [
          {
            reviewText: "hello",
          },
        ],
        subFields: [
          {
            name: "heading",
            type: "string",
          },
          {
            name: "subheading",
            type: "string",
          },
          {
            name: "content",
            type: "string",
          },
        ],
      },
    ],
  },
];
