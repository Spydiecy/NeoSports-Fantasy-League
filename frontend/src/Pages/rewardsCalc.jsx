import React, { useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";


import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import pool_image from "../../src/assets/pool_image.png";
import { useNavigate } from 'react-router-dom';
const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role:"admin"
  },
  {
    key: "2",
    name: "Zoey Lang",
    role:"admin"
  },
  {
    key: "3",
    name: "Zoey Lang",
    role:"admin"
    
  },
  {
    key: "4",
    name: "William Howard",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
];
const RewardsCalc = ({props}) => {
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  console.log("Props are::::",props);
  
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque')

  const backdrops = ["opaque", "blur", "transparent"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }
  
  const [show, setshow] = useState(true)
  const Navigate=useNavigate();
  return (
    <div className='bg-black h-[99.9vh]'>
       <div className="flex flex-wrap gap-3">
        {backdrops.map((b) => (
          <Button  
            key={b}
            variant="flat" 
            color="warning" 
            onPress={() => handleOpen(b)}
            className="capitalize"
          >
           {b}
          </Button>
        ))}  
      </div>
      <Modal size={'xl'} backdrop={backdrop} isOpen={show}
      scrollBehavior={scrollBehavior}
      onClose={()=>{
        setshow(false)
        onClose()
        Navigate('/home')
      }}  className="bg-[#121212] border-2 border-gray-600 rounded-2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <span className='text-white text-2xl'>
                  Rewards 
               
                  Calculator
                  </span>
                  </ModalHeader>
              <ModalBody className='text-white'>
               <h2 className='text-gGlow'>Total Partitcipants</h2>
               <Input type="number"  label="Number" />
               <div className="contest-entry-fee-div flex justify-between ">
                <div className="type-gold-div text-sm w-44">
                  <h2>Select Context</h2>
                <Select 
        label="Select Contest" 
        className="max-w-xs" 
        defaultOpen="gold"
      >
        
          <SelectItem key={"gold"}>
            Gold
          </SelectItem>
          <SelectItem key={"bronze"}>
            Bronze
          </SelectItem>
     
      </Select>
                </div>
                <div className="fee-div pr-16">
                  Entry Fee
                  <Input placeholder='1' type='number'></Input>
                </div>
               </div>
               <hr className='border-2 border-gray-600' />
            
               <h1 className='text-2xl'>Rewards <span className='text-gGlow'>by Rank</span></h1>
               <div className='table-tag text-black'>
     
               <Table aria-label="Example table with dynamic content" className='text-black'>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
              </ModalBody>
             
            </>
          )}
        </ModalContent>
      </Modal>


    </div>
  )
}

export default RewardsCalc