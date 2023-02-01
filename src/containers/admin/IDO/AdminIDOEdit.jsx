import { Textarea,Modal,ModalOverlay,ModalContent,Input, Menu,MenuButton,MenuList,MenuItem, Heading,Flex,Text, Avatar,Box,Button ,IconButton,Spacer,Wrap,WrapItem,Center, Divider, ModalBody, ModalFooter, ModalCloseButton} from "@chakra-ui/react";
import { HStack,ButtonGroup } from "@chakra-ui/react";

import {TfiWallet} from 'react-icons/tfi';
import {BsPersonCircle} from 'react-icons/bs';
import {FiCopy} from 'react-icons/fi';
import DashboardNav from "../../../components/DashboardNav";
import {IoIosArrowDown} from "react-icons/io";
import AdminNav from "../../../components/AdminNav";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import AdminBiddingNav from "../../../components/AdminBiddingNav";
import AdminBar from "../../../components/AdminBar";
import ProjectFundsDetails from "../../../components/ProjectFundsDetails";
import { Link } from "react-router-dom";

const AdminIDOEdit = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(<>
        <p>
         <Flex><AdminBar/>
<Flex flexWrap={"wrap"} ml="2rem" overflowX={"hidden"} flexDirection={"column"}>
 <Flex>
 <Flex m="1rem" fontSize={"24px"}></Flex><Spacer/>
     <Flex m="1rem" ><Box display='flex'   flexWrap={"wrap"} flexDirection={"column"}>
                 <Button  leftIcon={<BsPersonCircle></BsPersonCircle>} size='lg'  colorScheme='gray' fontSize={"20"} variant='outline' borderRadius='40'> 0xd23...45e78 <IconButton  fontSize={"14px"} pt="1"  aria-label='Copy button' variant={"none"} icon={<FiCopy />}/></Button> 
                 </Box>
                 </Flex>   
  
 </Flex>
   
    <Flex ml="1rem" direction={"column"}>
    <HStack w={"max-content"} h={"max-content"}  pt="0" >

 
  
<ButtonGroup bg="gray.200" gap="4" variant='unstyled' w="1100px">
 
<Link to="/admin/dashboard/ido"><Button  borderRadius={"0"} pl="2rem" pr="2rem" >ADD NEW PROJECT</Button></Link>
  <Link to="/admin/dashboard/ido/open"><Button borderRadius={"0"} pl="2rem" pr="2rem" bg="#1F94FF" color="white">OPEN PROJECT</Button></Link>
  <Link to="/admin/dashboard/ido/close"><Button borderRadius={"0"}  pl="2rem" pr="2rem" >CLOSE PROJECT </Button></Link>
  </ButtonGroup>
<Spacer />

</HStack>
<Flex bg="lightgray" direction={"column"} w="1100px" mt="1rem" mb="2rem">
   <Text bg="gray" textAlign={"center"} color="white">PROJECT DETAILS</Text>
   <Flex justifyContent={"center"} gap="4" mt="1rem">

    <Link to="/admin/dashboard/ido/edit"><Button colorScheme={"blue"} borderRadius="0">PROJECT INFORMATION</Button></Link>
   <Link to={"/admin/dashboard/ido/funds"}> <Button colorScheme={"blackAlpha"} borderRadius="0">FUNDING INFORMATION</Button></Link>
   </Flex>
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>TOKEN SMART CONTRACT</Text>
    <Text>TOKEN SYMBOL</Text>
   </Flex>
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>TOKEN NAME</Text>
    <Text>TOKEN SUPPLY</Text>
   </Flex><Flex ml="1rem" mt="1rem" gap="8">
    <Text>PROJECT SHORT DETAILS</Text>
    <Text>CHAIN TYPE</Text>
   </Flex>
   
   <Flex ml="1rem" mt="0.25rem">eg: ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</Flex>
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>CLIFF PERIOD</Text>
    <Text>TGE [PERCENTAGE]</Text>
   </Flex>
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>LINEAR VEST [PERCENTAGE]</Text>
    <Text>KYC REQUIREMENTS</Text>
   </Flex>
   
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>INSURANCE</Text>
    <Text>SOCIAL MEDIA</Text>
   </Flex>

        
   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>FCFS OPENS</Text>
    <Text>FCFS CLOSES</Text>
   </Flex>

   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>EARLY ACCESS</Text>
    <Text>ACCESS TYPE</Text>
   </Flex>

   <Flex ml="1rem" mt="1rem" gap="8">
    <Text>SWAP RATE OR TOKEN PRICE</Text>
    <Text>TOTAL RAISE</Text>
   </Flex>

   <Flex ml="1rem" mt="1rem">
    <Text>PROJECT FAQ</Text>
   </Flex>

   
   <Flex ml="1rem" mt="1rem" direction={"column"}>
    <Text>What is Script Network</Text>
    <Text>This is a Script Network Application that helps you invest your money in different applications.This is a Script Network Application that helps you invest your money in different applications.This is a Script Network Application that helps you invest your money in different applications.This is a Script Network Application that helps you invest your money in different applications.</Text>
   </Flex>
   <Flex ml="1rem" mt="1rem">
    <Text>TEAM & PARTNERS</Text>
   </Flex>

   <Flex ml="1rem" mt="1rem" direction="column">

    <Text>METRICS</Text>
        <Text>DOCUMENTED TOKEN DISTRIBUTION</Text>
        <Text>SALES ROUND DETAILS</Text>
        
   </Flex>
        <ButtonGroup m="1rem" mb="2rem"  gap="2" >
            <Button colorScheme={"blue"} borderRadius="0" >EDIT</Button>
            <Button colorScheme={"blue"} borderRadius="0" >CANCEL</Button><Spacer/>
            <Button colorScheme={"blue"} borderRadius="0" >HIDE FROM WEBSITE</Button>
        </ButtonGroup>
    </Flex>
      

</Flex>
</Flex>
</Flex>

    </p>
    </>)
}

export default AdminIDOEdit;