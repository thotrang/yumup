import BaseText from "../BaseText";

export default function OpeningStatement() {
  return (
    <div className="font-bold 2xl:text-3xl 2xl:leading-[56px] lg:text-2xl lg:leading-[50px] text-l leading-[32px] text-center">
      <BaseText>Welcome to YumUp!</BaseText>
      <BaseText>
        We are a digital content production company delivering entertainment
        through{" "}
        <BaseText tag="span" className="text-t-primary">
          Deliciousness, Beauty,
        </BaseText>{" "}
        and{" "}
        <BaseText tag="span" className="text-t-primary">
          Satisfaction
        </BaseText>
        .
      </BaseText>
      <BaseText>
        Our creativity, positivity, and innovation bring fantastic entertainment
        experiences{" "}
        <BaseText tag="span" className="text-t-primary">
          aspiring to become the leading original content producer in our area.
        </BaseText>
      </BaseText>
    </div>
  );
}
