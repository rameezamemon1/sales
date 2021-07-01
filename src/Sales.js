import React, { useState } from "react";
import Header from "./components/Header";
import {
  Box,
  HStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Radio,
  RadioGroup,
  Stack,
  Button,
  Text,
  FormHelperText,
} from "@chakra-ui/react";
import Slider, { SliderTooltip } from "rc-slider";
import { BsCloudUpload } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

const Sales = () => {
  const { Handle } = Slider;
  // TOKEN INFORMATION
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenDecimel, setTokenDecimel] = useState("");

  //  SALES INFORMATION
  const [noOfTokenOnSales, setNoOfTokenOnSales] = useState("");
  const [priceOfTokenOnSales, setPriceOfTokenOnSales] = useState("");
  const [saleStartTime, setSaleStartTime] = useState("");
  const [saleDuration, setSaleDuration] = useState("");

  // WALLET ALLOCATION
  const [limit, setLimit] = useState("nolimit");
  const [minLimit, setMinLimit] = useState("");
  const [maxLimit, setMaxLimit] = useState("");

  // SALES TYPE
  const [sale, setSale] = useState("");

  // VESTING SCHEDLE
  const [noOfTokenRelease, setNoOfTokenRelease] = useState("");
  const [month, setMonth] = useState("");

  // PANCAKE LISTING
  const [noofLiquidity, setNoOfLiquidity] = useState("");
  const [pancakeListingPrice, setPancakeListingPrice] = useState("");
  const [liquidityLockedfor, setLiquidityLockedfor] = useState("");

  // ERROR STATE

  const [tokenError, setTokenError] = useState(false);

  // VALIDATION FUNCTIONS STARTS FROM HERE
  const verifyTokenAdress = () => {
    if (tokenAddress.length === 42) {
      setTokenError(false);
    } else {
      setTokenError(true);
    }
  };

 const fileSelectedHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({
        selectedFile: event.target.files[0]
    }, () => this.fileUploadHandler());
  };
  // FUNCTION FOR SLIDER TOOLTIP
  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value} %`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    console.log('handleChange')
  };
  return (
    <React.Fragment>
      <Header />
      <Box h={"auto"} mx={[20, 20, 2, 20]} bg="#EDFAFB">
        <Box px={[2, 2, 2, 20]} mx={[2, 2, 2, 7]}>
          {/* TOKEN INFORMATION */}

          <Heading color="#00B7C5" fontSize="2xl" py={10}>
            Token Information
          </Heading>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <FormControl id="first-name" isRequired>
                <HStack>
                  <Box width="195px" mb={tokenError ? "6" : ""}>
                    <FormLabel>Token Address</FormLabel>
                  </Box>
                  <Box width="1200px">
                    <Input
                      name="tokenAddress"
                      value={tokenAddress}
                      onChange={(e) => setTokenAddress(e.target.value)}
                      onBlur={verifyTokenAdress}
                      maxLength={42}
                      bg="white"
                      placeholder="Token Address"
                    />
                    {tokenError && (
                      <FormHelperText>
                        Please submit a valid wallet address.
                      </FormHelperText>
                    )}
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 2]} spacing="40px">
            <Box>
              <FormControl id="first-name" isRequired>
                <HStack>
                  <Box width="250px">
                    <FormLabel>Token Symbol</FormLabel>
                  </Box>
                  <Box width="600px">
                    <Input value={tokenSymbol} bg="white" readOnly />
                  </Box>
                </HStack>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="first-name" isRequired>
                <HStack>
                  <Box width="250px">
                    <FormLabel>Token Decimel</FormLabel>
                  </Box>
                  <Box width="600px">
                    <Input value={tokenDecimel} bg="white" readOnly />
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>

          {/* SALES INFORMATION */}

          <Heading color="#00B7C5" fontSize="2xl" py={10}>
            Sales Information
          </Heading>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <FormControl id="first-name">
                <HStack>
                  <Box width="300px">
                    <FormLabel fontSize="sm">No. of tokens on sale </FormLabel>
                  </Box>
                  <Box width="300px">
                    <Input
                      textAlign="center"
                      bg="white"
                      placeholder="X"
                      value={noOfTokenOnSales}
                      onChange={(e) => setNoOfTokenOnSales(e.target.value)}
                    />
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <FormControl id="first-name">
                <HStack>
                  <Box width="300px">
                    <FormLabel>
                      <HStack>
                        <Text fontSize="sm">
                          Price of tokens on sale &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp;1 BNB &nbsp; &nbsp; &nbsp; &nbsp;
                        </Text>
                        <FaEquals color="#00B7C5" />
                      </HStack>
                    </FormLabel>
                  </Box>

                  <Box width="300px">
                    <Input
                      textAlign="center"
                      bg="white"
                      placeholder="X"
                      value={priceOfTokenOnSales}
                      onChange={(e) => setPriceOfTokenOnSales(e.target.value)}
                    />
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <FormControl id="first-name">
                <HStack>
                  <Box width="300px">
                    <FormLabel fontSize="sm">Sale Start Time</FormLabel>
                  </Box>
                  <Box width="300px">
                    <Input
                      bg="white"
                      placeholder=""
                      onChange={(e) => setSaleStartTime(e.target.value)}
                    />
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <FormControl id="first-name">
                <HStack>
                  <Box width="300px">
                    <FormLabel fontSize="sm">Sale Duration</FormLabel>
                  </Box>
                  <Box width="300px">
                    <Input
                      bg="white"
                      placeholder=""
                      onChange={(e) => setSaleDuration(e.target.value)}
                      value={saleDuration}
                    />
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>

          {/* PER WALLET ALLOCATION LIMIT */}

          <Heading color="black" fontSize="xl" py={10}>
            Per Wallet Allocation Limit
          </Heading>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <HStack>
                <RadioGroup defaultValue="2">
                  <Stack spacing={10} direction="row">
                    <Radio
                      colorScheme="blue"
                      value={"nolimit"}
                      onChange={() => setLimit("nolimit")}
                    >
                      No Limit
                    </Radio>
                    <Radio
                      colorScheme="blue"
                      value={"limit"}
                      onChange={() => setLimit("limit")}
                    >
                      Limit
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Box style={{ paddingLeft: "7.4rem" }}>
                  <HStack
                    px={4}
                    borderRadius={"md"}
                    border="1px"
                    borderColor={"#00B7C5"}
                  >
                    <Box>Min :</Box>
                    <Box width={"5rem"}>
                      {" "}
                      <Input
                        textAlign="center"
                        disabled={limit == "limit" ? false : true}
                        bg="white"
                        name="minLimit"
                        placeholder="X"
                        value={minLimit}
                        onChange={(e) => setMinLimit(e.target.value)}
                      />
                    </Box>
                    <Box>BNB</Box>
                    <Box pl={10}>Max :</Box>
                    <Box width={"5rem"}>
                      {" "}
                      <Input
                        textAlign="center"
                        disabled={limit == "limit" ? false : true}
                        bg="white"
                        name="maxLimit"
                        placeholder="X"
                        value={maxLimit}
                        onChange={(e) => setMaxLimit(e.target.value)}
                      />
                    </Box>{" "}
                    <Box>BNB</Box>{" "}
                  </HStack>
                </Box>
              </HStack>
            </Box>
          </SimpleGrid>

          {/* SALES TYPE */}

          <Heading color="black" fontSize="xl" py={10}>
            Sales Type
          </Heading>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <HStack>
                <RadioGroup>
                  <Stack spacing={10} direction="row">
                    <Radio
                      colorScheme="blue"
                      value={"public"}
                      onChange={() => setSale("public")}
                    >
                      Public
                    </Radio>
                    <Radio
                      colorScheme="blue"
                      value={"whitelist"}
                      onChange={() => setSale("whitelist")}
                    >
                      Whitelist Only
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Box style={{ paddingLeft: "7.4rem" }}>
                  <Button
                  onClick={handleClick}
                    disabled={sale == "whitelist" ? false : true}
                    bg="#00B7C5"
                    color="white"
                    width="200px"
                    _hover={{
                      bg: "#00B7C5",
                      color: "white",
                    }}
                    _active={{
                      bg: "#00B7C5",
                      color: "white",
                    }}
                  >
                    <BsCloudUpload fontSize="1.5rem" color="white" />
                    &nbsp;Upload CSV
                 
                  </Button>
                  <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
                
                </Box>
              </HStack>
            </Box>
          </SimpleGrid>

          {/* VESTING SCHEDLE */}

          <Heading color="#00B7C5" fontSize="2xl" py={10}>
            Vesting Schedule
          </Heading>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <FormControl id="first-name">
                <HStack>
                  <Box width="450px">
                    <FormLabel fontSize="sm">
                      % of tokens to be released at sale end time{" "}
                    </FormLabel>
                  </Box>
                  <Box width="1000px" pb={4}>
                    <Slider
                      defaultValue={20}
                      trackStyle={{
                        backgroundColor: "#00B7C5",
                        height: 20,
                        borderRadius: 0,
                      }}
                      handleStyle={{
                        borderColor: "#00B7C5",
                        height: 30,
                        width: 30,
                        marginLeft: -11,
                        marginTop: -5,
                        backgroundColor: "white",
                      }}
                      railStyle={{
                        backgroundColor: "#E1E1E1",
                        height: 20,
                        borderRadius: 0,
                      }}
                      handle={handle}
                    />{" "}
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <FormControl id="first-name">
                <HStack>
                  <Box width="130px">
                    <FormLabel fontSize="sm">Every 30 days for</FormLabel>
                  </Box>
                  <Box width="110px">
                    <Input
                      textAlign="center"
                      bg="white"
                      placeholder="X"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                    />
                  </Box>
                  <Box width="70px">
                    <FormLabel textAlign="left" fontSize="sm">
                      months
                    </FormLabel>
                  </Box>
                  <Box width="110px">
                    <Input textAlign="center" bg="white" placeholder="X" />
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>

          {/* PANCAKESWAP LISTING */}

          <Heading color="#00B7C5" fontSize="2xl" py={10}>
            Pancakeswap Listing
          </Heading>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <FormControl id="first-name">
                <HStack>
                  <Box width="450px">
                    <FormLabel fontSize="sm">
                      % of liquidity to be locked{" "}
                    </FormLabel>
                  </Box>
                  <Box width="1000px" pb={4}>
                    <Slider
                      defaultValue={40}
                      min={0}
                      max={100}
                      trackStyle={{
                        backgroundColor: "#00B7C5",
                        height: 20,
                        borderRadius: 0,
                      }}
                      handleStyle={{
                        borderColor: "#00B7C5",
                        height: 30,
                        width: 30,
                        marginLeft: -11,
                        marginTop: -5,
                        backgroundColor: "white",
                      }}
                      railStyle={{
                        backgroundColor: "#E1E1E1",
                        height: 20,
                        borderRadius: 0,
                      }}
                    />{" "}
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <FormControl id="first-name">
                <HStack>
                  <Box width="300px">
                    <FormLabel>
                      <HStack>
                        <Text fontSize="sm">
                          Price of tokens on sale &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp;1 BNB &nbsp; &nbsp; &nbsp; &nbsp;
                        </Text>
                        <FaEquals color="#00B7C5" />
                      </HStack>
                    </FormLabel>
                  </Box>
                  <Box width="120px">
                    <Input
                      textAlign="center"
                      bg="white"
                      placeholder="X"
                      value={pancakeListingPrice}
                      onChange={(e) => setPancakeListingPrice(e.target.value)}
                    />
                  </Box>
                  <Box width="300px">
                    <FormLabel fontSize="sm">Tokens </FormLabel>
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={[1, null, 1]}>
            <Box my={2}>
              <FormControl id="first-name">
                <HStack>
                  <Box width="300px">
                    <FormLabel fontSize="sm">Liquidity locked for </FormLabel>
                  </Box>
                  <Box width="120px">
                    <Input
                      textAlign="center"
                      bg="white"
                      placeholder="X"
                      value={liquidityLockedfor}
                      onChange={(e) => setLiquidityLockedfor(e.target.value)}
                    />
                  </Box>
                  <Box width="300px">
                    <FormLabel fontSize="sm">Days </FormLabel>
                  </Box>
                </HStack>
              </FormControl>
            </Box>
          </SimpleGrid>

          <Button
            px={0}
            my={5}
            color="#00B7C5"
            bg="transparent"
            fontSize="2xl"
            fontWeight={"bold"}
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            No of tokens to be approved
          </Button>
          <br />
          <Button
            px={0}
            my={5}
            color="#00B7C5"
            fontWeight={"bold"}
            bg="transparent"
            fontSize="2xl"
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            Get token approval
          </Button>
          <br />
          <Button
            my={5}
            px={0}
            fontWeight={"bold"}
            color="#00B7C5"
            bg="transparent"
            fontSize="2xl"
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            Check approval transaction
          </Button>
          <br />
          <Button
            my={5}
            px={0}
            fontWeight={"bold"}
            color="#00B7C5"
            bg="transparent"
            fontSize="2xl"
            _hover={{
              bg: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            Deploy Sale contract
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Sales;
