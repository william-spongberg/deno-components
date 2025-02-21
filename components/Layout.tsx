import { ComponentChildren } from "preact";
import * as Text from "../components/Text.tsx";
import Button from "../components/Button.tsx";

const SCREEN_COLOUR = "bg-black";
const ELEMENT_COLOUR = "bg-gray-800";
const ELEMENT_SIZE = "max-w-screen-md";
const TEXT_COLOUR = "text-white";

interface ChildrenProps {
  children: ComponentChildren;
}

interface PageProps {
  colour?: string;
  children: ComponentChildren;
  disableFooter?: boolean;
  footerProps?: ButtonProps;
  enableHeader?: boolean;
  headerProps?: HeaderProps;
}

export function Page({
  colour = SCREEN_COLOUR,
  children,
  disableFooter = false,
  footerProps = {},
  enableHeader = false,
  headerProps = {},
}: PageProps) {
  return (
    <div class={`flex flex-col min-h-screen ${colour}`}>
      {enableHeader ? <Header {...headerProps} /> : null}
      <div class="flex-grow flex items-center justify-center mb-9 px-4 sm:px-8 pt-8 pb-8">
        {children}
      </div>
      {disableFooter ? null : <Footer {...footerProps} />}
    </div>
  );
}

interface ElementProps {
  children: ComponentChildren;
  title?: string;
  colour?: string;
  textColour?: string;
  size?: string;
}

export function Element({
  title = "",
  colour = ELEMENT_COLOUR,
  textColour = TEXT_COLOUR,
  size = ELEMENT_SIZE,
  children,
}: ElementProps) {
  return (
    <div
      class={`px-8 py-8 mx-auto my-auto ${colour} rounded-2xl w-full ${size}`}
    >
      <Center>
        <Text.Title textColour={textColour}>{title}</Text.Title>
        <br />
        {children}
        <br />
      </Center>
    </div>
  );
}

interface GridProps {
  customGridCols?: string;
  children: ComponentChildren;
}

export function Grid({ customGridCols, children }: GridProps) {
  if (!customGridCols) {
    const childCount = Array.isArray(children) ? children.length : 1;
    const gridCols =
      childCount <= 2
        ? `grid-cols-${childCount}`
        : "grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    customGridCols = gridCols;
  }

  return <div class={`grid ${customGridCols} gap-4 mt-4 mb-4`}>{children}</div>;
}

export function Center({ children }: ChildrenProps) {
  return (
    <div class="flex flex-col items-center px-4 py-4 sm:px-8">{children}</div>
  );
}

interface HeaderProps {
  title?: string;
}

export function Header({ title = "" }: HeaderProps) {
  return (
    <header class="flex flex-col items-center w-auto bg-gray-900 text-white">
      <Text.Heading>{title}</Text.Heading>
    </header>
  );
}

interface ButtonProps {
  disableButton?: boolean;
  href?: string;
  buttonText?: string;
}

interface AuthorProps {
  name?: string;
  link?: string;
}

export function Footer(
  {
    disableButton = false,
    href = "/",
    buttonText = "Go back Home",
  }: ButtonProps,
  { name = "Author", link = "" }: AuthorProps
) {
  return (
    <>
      <footer class="flex flex-col items-center w-auto bg-gray-900 text-white">
        {!disableButton && <Button href={href} text={buttonText} />}
        <div class="flex flex-col md:flex-row justify-center items-center h-auto md:h-16 p-4 md:p-2 pb-16 md:pb-2">
          <p class="text-yellow-500 mb-2 md:mb-0">This website is in beta.</p>
          <p class="hidden md:block mx-2">|</p>
          <p class="mb-2 md:mb-0">
            Made with ❤️ by{" "}
            <a href={link} class="text-blue-500 hover:underline">
              {name}
            </a>
          </p>
          <p class="hidden md:block mx-2">|</p>
          <p>
            &copy; {name} {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
