# fresh-components

A collection of reusable UI components built with [Preact](https://preactjs.com/) and configured to work well with Deno Fresh. These components include customizable layout structures, typographic elements, and buttons that can be tailored via props.

> **Note:** All components are styled using Tailwind CSS classes. Any colour or size customisations should be done using Tailwind classes or by modifying the component styles directly.

---

## Components

### Layout Components

Defined in [components/Layout.tsx](components/Layout.tsx):

#### Page

- **Description:** Wrap your content with a consistent screen setup.
- **Customization:**
  - Change the screen background using the `colour` prop.
  - Toggle header visibility with `enableHeader` and customize via `headerProps`.
  - Toggle footer display with `disableFooter` and customize via `footerProps` (passed to the Footer component).
- **Default Values:**
  - `colour`: `"bg-black"`
  - `disableFooter`: `false`
  - `footerProps`: `{}`
  - `enableHeader`: `false`
  - `headerProps`: `{}`

#### Element

- **Description:** A centered container to wrap section content.
- **Customization:**
  - Set a title via the `title` prop.
  - Modify the container background using the `colour` prop.
  - Adjust text color via the `textColour` prop.
  - Change the maximum container width with the `size` prop.
- **Default Values:**
  - `title`: `""`
  - `colour`: `"bg-gray-800"`
  - `textColour`: `"text-white"`
  - `size`: `"max-w-screen-md"`

#### Grid

- **Description:** Provides a responsive grid layout for children elements.
- **Customization:**
  - Manually set grid columns using the `customGridCols` prop. If not provided, the layout is determined based on the number of children:
    - For 1 or 2 children: `"grid-cols-1"` or `"grid-cols-2"`.
    - For more than 2 children: `"grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"`.
- **Default Values:**
  - `customGridCols`: *Automatically determined based on the number of children.*

#### Center

- **Description:** Centers its children within the layout.
- **Customization:** Adjust spacing or override the container classes as needed.
- **Default Values:** *No additional props; uses predefined spacing classes.*

#### Header

- **Description:** Displays a header with a title.
- **Customization:** Provide a custom title via the `title` prop. The header uses the Text.Heading component for styling.
- **Default Values:**
  - `title`: `""`
  - `colour`: `"bg-gray-900"`  
  - (Text color is inherited from the container; the default in Text.Heading is `"text-white"`)

#### Footer

- **Description:** Shows footer details along with an optional navigation button.
- **Customization:**
  - Toggle the display of the button with the `disableButton` prop.
  - Customize the button by passing `buttonProps` (which includes `href` and `text`).
  - Modify author information via `authorProps` (with `name` and `link`).
  - Optionally, disable beta messaging by setting `isBeta` to `false`.
- **Default Values:**
  - `colour`: `"bg-gray-900"`
  - `textColour`: `"text-white"`
  - `disableButton`: `false`
  - `buttonProps`: `{ href: "/", text: "Home" }`
  - `authorProps`: `{ name: "Author", link: "/" }`
  - `isBeta`: `true`

---

### Text Components

Located in [components/Text.tsx](components/Text.tsx):

#### Title

- **Usage:** For large, prominent titles.
- **Customization:** Override the default text colour using the `textColour` prop.
- **Default Value:**
  - `textColour`: `"text-white"`

#### Heading

- **Usage:** For section headings.
- **Customization:** Change the text color via the `textColour` prop.
- **Default Value:**
  - `textColour`: `"text-white"`

#### SubHeading

- **Usage:** For secondary headings.
- **Customization:** Set a custom color using the `textColour` prop.
- **Default Value:**
  - `textColour`: `"text-white"`

#### Paragraph

- **Usage:** For general paragraphs.
- **Customization:** Customize text color via the `textColour` prop.
- **Default Value:**
  - `textColour`: `"text-white"`

#### Small

- **Usage:** For captions or fine print.
- **Customization:** Modify the text color using the `textColour` prop.
- **Default Value:**
  - `textColour`: `"text-white"`

---

### Button Component

Implemented in [components/Button.tsx](components/Button.tsx):

#### Button

- **Description:** A customizable button with default styling.
- **Customization:**
  - Set the button text with the `text` prop.
  - Change the destination URL using `href`.
  - Override the background color using `backgroundColour`.
  - Change the text color with the `textColour` prop.
  - Customize hover effects using `hoverBackgroundColour` and `hoverTextColour`.
  - Optionally, specify a different target or add a `rel` attribute with `target` and `rel`.
- **Default Values:**
  - `backgroundColour`: `"bg-blue-500"`
  - `textColour`: `"text-white"`
  - `hoverBackgroundColour`: `"hover:bg-blue-600"`
  - `hoverTextColour`: `"hover:text-white"`
  - `target`: `"_self"`
  - `rel`: `""`

---

### Usage

All components are re-exported from [mod.ts](mod.ts) for easy imports:

```tsx
import { Layout, Text, Button } from "jsr:@spongberg/fresh-components";

export default function App() {
  return (
    <Layout.Page
      colour="bg-gray-900"
      enableHeader={true}
      headerProps={{ title: "Welcome" }}
      footerProps={{ buttonProps: { href: "/home", text: "Back Home" } }}
    >
      <Layout.Element
        title="Fresh Components"
        colour="bg-gray-800"
        textColour="text-yellow-300"
        size="max-w-lg"
      >
        <Text.Paragraph textColour="text-gray-200">
          This is a simple, customizable reusable component library designed to
          speed up your project development.
        </Text.Paragraph>
        <Button
          href="/learn-more"
          text="Learn More"
          backgroundColour="bg-green-500"
          textColour="text-black"
          hoverBackgroundColour="hover:bg-green-600"
          hoverTextColour="hover:text-gray-100"
        />
      </Layout.Element>
    </Layout.Page>
  );
}
```
