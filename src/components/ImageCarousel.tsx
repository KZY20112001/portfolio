import { HStack, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useContext, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Image from "@/components/CustomImage";
import { raleway } from "@/app/fonts";
interface ImageCarouselProps {
  images: string[];
}
const ImageCarousel: FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const nextImage = () => {
    setDirection(1);

    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
    );
  };
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            zIndex={10}
            src={images[currentIndex]!}
            objectFit={"contain"}
            width="600"
            height="350"
            alt="thumbnail"
            cursor={"pointer"}
            placeholder="blur"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <Text
            position={"absolute"}
            left={0}
            right={0}
            bottom={1}
            marginX="auto"
            width="3rem"
            display="flex"
            justifyContent={"center"}
            borderRadius={"lg"}
            bgColor={"white"}
            textColor={"black"}
            fontWeight={"semibold"}
            className={raleway.className}
          >
            {currentIndex + 1}/{images.length}
          </Text>
          <HStack
            position="absolute"
            top="50%"
            width="100%"
            justify="space-between"
            transform="translateY(-50%)"
          >
            <IoIosArrowBack
              onClick={prevImage}
              className={`cursor-pointer m-8 dark:invert ${
                currentIndex === 0 ? "invisible" : "visible"
              }`}
            />
            <IoIosArrowForward
              onClick={nextImage}
              className={`cursor-pointer m-8 dark:invert ${
                currentIndex === images.length - 1 ? "invisible" : "visible"
              }`}
            />
          </HStack>
        </>
      )}
    </>
  );
};

export default ImageCarousel;
