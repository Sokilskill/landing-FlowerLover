import { Image, Link, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Link
      href="/"
      py={"24px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mb="1px"
    >
      <Image
        src="src/assets/images/logo.svg"
        fallbackSrc="https://via.placeholder.com/150"
        alt="logo"
        width={42}
        height={39}
      />
      <Text fontFamily={"spline"} lineHeight={1.8} textTransform={"uppercase"}>
        FlowerLover
      </Text>
    </Link>
  );
}