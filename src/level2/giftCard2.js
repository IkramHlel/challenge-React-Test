import React, { useEffect, useState,} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useStyles from '../level1/styles';
import gift from '../img/gift.png';
import {TextField, MenuItem, InputAdornment, Button } from "@material-ui/core";
import {getCards} from '../redux/actions/cardActions';
import axios from 'axios';


function GiftCard2 () {
    let classes = useStyles();
    const dispatch = useDispatch();
    const cards = useSelector(state => state).cardsReducer.cards;
    const possibleAmounts = useSelector(state => state).cardsReducer.possibleAmounts;
    const [reset, setReset] = useState(false);
    const [amount, setAmount]= useState();
    const [selectedAmount, setselectedAmount]= useState();
      const handleChange = (e) => {
        setAmount(e.target.value);
      };
      const handleSelectedChange = (e) => {
        setselectedAmount(e.target.value)
      }
      const handleValidate = () => {
          dispatch(getCards(5,amount));
          setReset(true);
      }
      const handleReset = () => {
        window.location.reload(false);
      }
      const handleIncrement = () => {
        setAmount(cards.ceil.value);
      }
      const handledecrement = () => {
        setAmount(cards.floor.value);
      }
    return (
        <div className={classes.home}>
            <img src={gift} alt="Gift" className={classes.gauche}/>
            <div className={classes.droite}>
              <p className={classes.pageTitle}>GiftCard</p>
              <div style={{width: '50%'}}>
              <div className={classes.fieldContainer}>
                <TextField
                    label="Set Amount"
                    variant='outlined'
                    helperText={possibleAmounts.length !== 0 ? "Please vary your amount":null} 
                    value={amount}
                    fullWidth
                    required
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          €
                        </InputAdornment>
                      ),
                    }}
                />
              {possibleAmounts.length !== 0 
                ?<div style={{width: 25, marginLeft: 10}}>
                  <Button
                    onClick={handleIncrement}
                    size="large"
                    variant="contained"
                    disabled={amount === cards.ceil.value}
                    style={{backgroundColor:amount === cards.ceil.value ?"#cccccc": "#3f989c", height: 30, margin: 5}}
                  >
                    +
                  </Button>
                  <Button
                    onClick={handledecrement}
                    size="large"
                    variant="contained"
                    disabled={amount === cards.floor.value}
                    style={{backgroundColor:amount === cards.floor.value ?"#cccccc": "#3f989c", height: 30, margin: 5}}
                  >
                    -
                  </Button> 
                </div>
              : null}
              </div>
              </div>
              <div className={classes.btnContainer}>
                <Button
                  onClick={handleValidate}
                  size="large"
                  variant="contained"
                  fullWidth
                  style={{backgroundColor:"#3f989c", height: 46,}}
                >
                  Validate
                </Button>
              </div>
              {cards.length != 0 && cards.equal !== undefined 
                ? <div className={classes.cardsContainer}>
                    <p> Votre montant est composé des cartes suivantes :</p>
                    {cards.equal 
                      ? cards.equal.cards.map((card) => <li>{card} €</li>) 
                      : null
                    }
                  </div>
                : null
              }
              {reset 
                ?<div className={classes.btnContainer}>
                  <Button
                    onClick={handleReset}
                    size="large"
                    variant="contained"
                    fullWidth
                    style={{backgroundColor:"#3f989c", height: 46,}}
                  >
                    Reset
                  </Button>
                </div>
              : null}
            </div>
        </div>
    );
}

export default GiftCard2;

