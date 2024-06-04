import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    TabIndicator,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Setting from './Setting'
import AboutUs from './AboutUs'

export default function ModalDashboard({ index, isOpen, onClose }: { index: number, isOpen: boolean, onClose: Function }) {
    return (
        <>
            <Modal isOpen={isOpen} size={'4xl'} onClose={() => { onClose() }}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Tabs size={'md'} defaultIndex={index} variant={'line'}>
                            <TabList>
                                <Tab w={150}>Cài đặt</Tab>
                                <Tab w={150}>Về chúng tôi</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Setting></Setting>
                                </TabPanel>
                                <TabPanel>
                                    <AboutUs></AboutUs>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}