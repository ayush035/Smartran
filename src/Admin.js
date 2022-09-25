import React from 'react'
import { Footer } from './Components/Footer';
import MintNFT from "../src/Components/MintNFT";
import Navbar from '../src/Components/Navbar';
import {CreateFlow} from "./CreateFlow" 


export default function Admin (){
    return (
    <>
        <Navbar />
        <CreateFlow/>
        <MintNFT />
        <Footer/>
</>
    )
}