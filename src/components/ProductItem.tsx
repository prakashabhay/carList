import {Flex,Text,Link, Spacer,View } from "vcc-ui";
import Image from "next/image";
import {ProductType} from '../utility/types'

export const ProductItem: React.FC<ProductType> = ({ id, bodyType, imageUrl, modelName, modelType }) => {
    return (
      <View margin={1}>
        <Flex style={{ textAlign: "left" }}>
          <Text>
            {bodyType.toLocaleUpperCase()}
          </Text>
          <Flex
            extend={{
              fromL: {
                flexDirection: "row",
                alignItems: "center",
              },
            }}
          >
            <Text subStyle="emphasis" style={{marginRight:5}}>
              {modelName}
            </Text>
            <Text >
              {modelType}
            </Text>
          </Flex>
        </Flex>
        
        <Image src={imageUrl} alt="Volvo" width={300} height={220} />
        <Flex
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10
          }}
        >
          <Link href={`/learn/${id}`} arrow="right">
            <span>learn</span>
          </Link>
          <Spacer size={4}></Spacer>
          <Link href={`/shop/${id}`} arrow="right">
            <span>shop</span>
          </Link>
        </Flex>
        </View>
    );
  };