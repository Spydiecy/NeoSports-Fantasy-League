import React, { useState, useEffect } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

const RewardsCalc = ({ props }) => {
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('opaque');
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const [participants, setParticipants] = useState(100);
  const [contestType, setContestType] = useState('gold');
  const [entryFee, setEntryFee] = useState(1);
  const [rewardsDistribution, setRewardsDistribution] = useState([]);

  useEffect(() => {
    calculateRewards();
  }, [participants, contestType, entryFee]);

  const calculateRewards = () => {
    const totalPool = participants * entryFee;
    const distributePool = totalPool * 0.9; // 90% of the pool is distributed

    let distribution;
    if (contestType === 'gold') {
      distribution = [
        { rank: '1st', percentage: 35 },
        { rank: '2nd', percentage: 20 },
        { rank: '3rd', percentage: 15 },
        { rank: '4th', percentage: 10 },
        { rank: '5th', percentage: 5 },
        { rank: '6th-10th', percentage: 1 },
      ];
    } else { // bronze
      distribution = [
        { rank: '1st', percentage: 50 },
        { rank: '2nd', percentage: 30 },
        { rank: '3rd', percentage: 20 },
      ];
    }

    const calculatedRewards = distribution.map(item => ({
      ...item,
      reward: (distributePool * item.percentage / 100).toFixed(2)
    }));

    setRewardsDistribution(calculatedRewards);
  };

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  return (
    <div className='bg-black h-[99.9vh]'>
      <Modal 
        size={'xl'} 
        backdrop={backdrop} 
        isOpen={show}
        scrollBehavior={scrollBehavior}
        onClose={() => {
          setShow(false)
          onClose()
          navigate('/home')
        }}  
        className="bg-[#121212] border-2 border-gray-600 rounded-2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <span className='text-white text-2xl'>Rewards Calculator</span>
              </ModalHeader>
              <ModalBody className='text-white'>
                <h2 className='text-gGlow'>Total Participants</h2>
                <Input 
                  type="number" 
                  label="Number" 
                  value={participants}
                  onChange={(e) => setParticipants(Number(e.target.value))}
                />
                <div className="contest-entry-fee-div flex justify-between ">
                  <div className="type-gold-div text-sm w-44">
                    <h2>Select Contest</h2>
                    <Select 
                      label="Select Contest" 
                      className="max-w-xs" 
                      value={contestType}
                      onChange={(e) => setContestType(e.target.value)}
                    >
                      <SelectItem key="gold" value="gold">Gold</SelectItem>
                      <SelectItem key="bronze" value="bronze">Bronze</SelectItem>
                    </Select>
                  </div>
                  <div className="fee-div pr-16">
                    Entry Fee
                    <Input 
                      placeholder='1' 
                      type='number'
                      value={entryFee}
                      onChange={(e) => setEntryFee(Number(e.target.value))}
                    />
                  </div>
                </div>
                <hr className='border-2 border-gray-600' />
                <h1 className='text-2xl'>Rewards <span className='text-gGlow'>by Rank</span></h1>
                <div className='table-tag text-black'>
                  <Table aria-label="Rewards distribution table">
                    <TableHeader>
                      <TableColumn>RANK</TableColumn>
                      <TableColumn>PERCENTAGE</TableColumn>
                      <TableColumn>REWARD (GAS)</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {rewardsDistribution.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.rank}</TableCell>
                          <TableCell>{item.percentage}%</TableCell>
                          <TableCell>{item.reward}</TableCell>
                        </TableRow>
                      ))}
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

export default RewardsCalc;