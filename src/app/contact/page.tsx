import BaseText from "@/components/BaseText";
import BaseWrapperLayout from "@/components/BaseWrapperLayout";
import FormContact from "@/modules/FormContact";

export default function Contact() {
  return (
    <BaseWrapperLayout
      isBackground
      className="lg:pt-base60 sm:pt-12 pt-6 pb-base70 gap-8"
    >
      <div className="lg:min-w-[30%] lg:w-fit lg:inline-block lg:pr-12 w-full ">
        <BaseText
          tag="h1"
          className="font-bold text-xl-2"
          content="Let's talk with us"
        ></BaseText>
      </div>
      <div className="lg:min-w-[60%] lg:w-fit lg:inline-block w-full sm:pt-8 pt-4">
        <FormContact></FormContact>
      </div>
    </BaseWrapperLayout>
  );
}
