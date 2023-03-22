import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Input, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponents from './ErrorComponents' 
import CoinCards from "./CoinCards";


const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
  currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  // console.log(coins);

  const changePage = (page) => {
    setPage(page);
    setLoading(true); 
  };
  
  const btns = new Array(15).fill(1);
  
  
  const [message, setMessage]=useState('');
  
  const changeInput=(event)=>{
    setMessage(event.target.value)
    // console.log(message);
  }
  // const btnClick=(e)=>{
    
  //     for(var i=0; i<coins.length;i++){
  //         var coinId = coins[i].id
  //         // console.log(coinId);

  //         if(coinId==message){
  //             console.log("match hogo");
  //           }
  //         }
    
  //     }
  
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
          );
          setCoins(data);
          setLoading(false);
          // console.log(data);
         
        } catch (error) {
          setError(true);
          setLoading(false);
        }
        // console.log(data);
      };
      fetchCoins();
    }, [currency, page]);
    
  if (error) return <ErrorComponents message={"Error While Fetching Coins"} />;
 

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"4"}>
            <HStack spacing={"4"} justifyContent='space-around'>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
              {/* <Input className="input-value" onChange={changeInput} placeholder='Search' value={message} style={{color:"black", border:"1px solid grey",marginLeft:"20px",width:"30%"}}/> */}
              {/* <Button onClick={btnClick} >Click me!</Button> */}
              {/* <span>{message}</span> */}
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (

              <CoinCards
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}

              />

            ))}
          </HStack>

          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;