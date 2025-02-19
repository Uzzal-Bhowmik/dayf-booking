import { Flex } from "antd";
import ImageSlider from "./_components/ImageSlider";

export default function AuthLayout({ children }) {
  return (
    <main className="h-screen max-h-screen overflow-auto grid place-items-center bg-gradient-to-br to-primary/75 from-secondary/75">
      <Flex
        align="stretch"
        justify="start"
        className="max-h-[60vh] lg:w-3/4 md:w-[85%] w-full xl:w-1/2 mx-auto bg-gray-100 shadow rounded-xl"
      >
        <div className="xl:w-[38%]">
          <ImageSlider />
        </div>

        <div className="flex-1 grid place-items-center p-8">{children}</div>
      </Flex>
    </main>
  );
}
