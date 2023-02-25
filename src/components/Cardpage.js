
import { Button, Stack } from '@chakra-ui/react';
import React, {useState} from 'react';
import Card from './MyCard';
import DownloadModal from './DownloadModal';
import ShareModal from './ShareModal';

function Cardpage() {
  const [isDOpen, setIsDOpen] = useState(false);
  const [isSOpen, setIsSOpen] = useState(false);

  const openDModal = () => {
    setIsDOpen(true);
  };

  const closeDModal = () => {
    setIsDOpen(false);
  };

  const openSModal = () => {
    setIsSOpen(true);
  };

  const closeSModal = () => {
    setIsSOpen(false);
  };
  return (
    <div>
    <div style={{ paddingBottom: '10px', display: 'flex', justifyContent: 'right'}}>
        <Button align='right'>EDIT</Button>
      
    </div>
    <div className="app">
      <Card
        name="John Doe"
      />
    </div>
    <div>

    
      
    </div>
    </div>
    
  );

  
}


export default Cardpage;