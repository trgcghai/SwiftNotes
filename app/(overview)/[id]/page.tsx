'use client'
import { Grid, GridItem } from '@chakra-ui/react'
import SideHeader from '../../ui/components/SideHeader';
import ListNote from '../../ui/components/ListNote';
import Note from '../../ui/components/Note';
import { useEffect, useState } from 'react';
import { getNotesByUser } from '../../controller/notesController';
import { getUser } from '@/app/controller/userController';
import { User } from '@/app/global';

export default function Page() {

  const [notes, setNotes] = useState([])
  const [user, setUser] = useState<User | undefined>()

  useEffect(() => {
    const fetchUser = async () => {
      const data: User = await getUser('user@nextmail.com')
      if (data) setUser({ ...data })
    }
    fetchUser()

    const fetchNote = async () => {
      const data = await getNotesByUser('user@nextmail.com')
      if (data) setNotes(data)
    }
    fetchNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Grid templateColumns='repeat(24, 1fr)' templateRows='repeat(2, 1fr)' height="100%" className='p-4' gap='8'>
      <GridItem border={'1px solid #ccc'} className='rounded-md' colSpan={3} rowSpan={2}>
        <SideHeader user={user}></SideHeader>
      </GridItem>
      <GridItem border={'1px solid #ccc'} className='rounded-md' colSpan={4} rowSpan={2}>
        <ListNote notes={notes}></ListNote>
      </GridItem>
      <GridItem border={'1px solid #ccc'} className='rounded-md' colSpan={17} rowSpan={2}>
        <Note></Note>
      </GridItem>
    </Grid>
  );
}
