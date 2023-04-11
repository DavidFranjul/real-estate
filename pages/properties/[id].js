import DefaultLayout from "@/features/Layout/DefaultLayout/DefaultLayout";
import { usePropertyFormat } from "@/features/common/Hooks/usePropertyFormat";
import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { TbMapPin } from "react-icons/tb";
import PropertyThumbnailSlider from "@/features/Property/components/PropertyThumbnailSlider/propertyThumbnailSlider";
import PropertyStats from "@/features/Property/components/PropertyStats/PropertyStats";
import TextContextBox from "@/features/common/modules/TextContentBox/TextContentBox";
import PropertyYoutubeEmbed from "@/features/Property/components/PropertyYoutubeEmbed/PropertyYoutubeEmbed";
import PropertyMatterPortContent from "@/features/Property/components/PropertyMatterPortContent/PropertyMatterPortContent";
import { getProperty } from "@/features/Property/components/api/getProperty";

const PropertySingle = ({ property }) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
    furnished,
  } = usePropertyFormat(property);

  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" paddingY="3rem">
        <Grid
          templateColumns={"repeat(6, 1fr)"}
          gap="5"
          maxWidth={"1280px"}
          margin={"0 auto"}
        >
          <GridItem colSpan={"6"}>
            <Text
              fontSize={"3xl"}
              fontWeight={"medium"}
              color={"blue.800"}
              textAlign={{ base: "center", sm: "left" }}
            >
              {propertyType} {title}
            </Text>
            <Flex
              fontSize={"xl"}
              color={"blue.600"}
              textAlign={"center"}
              alignItems={"center"}
              flexDirection={{ base: "col", sm: "row" }}
              gap={".5rem"}
              marginY={{ base: "1rem", sm: "0" }}
            >
              <TbMapPin />
              <Text fontWeight={"light"}>
                {address} - id:{externalID}
              </Text>
              <Badge colorScheme="green">{purpose}</Badge>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyThumbnailSlider photos={photos}></PropertyThumbnailSlider>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyStats
              rooms={rooms}
              baths={baths}
              price={price}
              sqSize={sqSize}
            />
            <TextContextBox title="Description">
              <Text
                fontWeight={"light"}
                color={"gray.600"}
                fontSize={"1rem"}
                noOfLines={"4"}
              >
                {description}
              </Text>
            </TextContextBox>
            <TextContextBox title={"Amenities"}>
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                fontWeight={"light"}
                color={"gray.600"}
                fontSize={"1rem"}
              >
                {amenities?.length
                  ? amenities.map((item) => <Text>{item}</Text>)
                  : "Please contact us for more info"}
              </SimpleGrid>
            </TextContextBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <TextContextBox title={"Video Walkthrough"}>
              <PropertyYoutubeEmbed coverVideo={coverVideo} />
            </TextContextBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <TextContextBox title={"3D Tour"}>
              <PropertyMatterPortContent panorama={panorama} />
            </TextContextBox>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default PropertySingle;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const property = await getProperty(id);
  // const property = require("@/features/data/property");

  return {
    props: { property: property },
  };
}
