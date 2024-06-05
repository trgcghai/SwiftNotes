'use client'
import { Grid, GridItem } from '@chakra-ui/react'
import SideHeader from '../components/SideHeader';
import ListNote from '../components/ListNote';
import Note from '../components/Note';

export default function page() {
  return (
    <Grid templateColumns='repeat(24, 1fr)' templateRows='repeat(2, 1fr)' height="100%" className='p-4' gap='8'>
      <GridItem border={'1px solid #ccc'} className='rounded-md' colSpan={3} rowSpan={2}>
        <SideHeader></SideHeader>
      </GridItem>
      <GridItem border={'1px solid #ccc'} className='rounded-md' colSpan={4} rowSpan={2}>
        <ListNote></ListNote>
      </GridItem>
      <GridItem border={'1px solid #ccc'} className='rounded-md' colSpan={17} rowSpan={2}>
        <Note></Note>
      </GridItem>
    </Grid>
  );
}
