'use client'
import { Grid, GridItem } from '@chakra-ui/react'
import SideHeader from '../../ui/components/SideHeader';
import ListNote from '../../ui/components/ListNote';
import Note from '../../ui/components/Note';
import { useEffect, useState } from 'react';
import { User } from '@/app/global';
import { getUser } from '@/app/lib/actions';

export default function Page() {

  const [user, setUser] = useState<User | undefined>()

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser('user@nextmail.com')
      data[0]._id = data[0]._id.toString()
      if (data) setUser({ ...data[0] })
    }
    fetchUser()
  }, [])


  return (
    <Grid templateColumns='repeat(24, 1fr)' templateRows='repeat(2, 1fr)' height="100%" className='p-4' gap='8'>
      <GridItem border={'1px solid #ccc'} className='rounded-md' colSpan={3} rowSpan={2}>
        <SideHeader user={user}></SideHeader>
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
