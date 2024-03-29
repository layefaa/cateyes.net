import {HomePage} from "@/components/pages";
import Script from "next/script";

export const metadata = {
  title: 'Home'
}
export default function Home() {
  return (
      <>
        <HomePage/>
        <Script
            id={'images'}
            strategy={"lazyOnload"}
        >
          {
            `
          var elements = document.getElementsByClassName("images");
          for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute("src", elements[i].getAttribute("data-src"));
          }
            `
          }

        </Script>
      </>
  )
}
