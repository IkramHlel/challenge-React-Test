import React, { useEffect, useState,} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './styles';
import gift from '../img/gift.png';
import {TextField, MenuItem, InputAdornment, Button } from "@material-ui/core";
import {getCards} from '../redux/actions/cardActions';
import axios from 'axios';


function GiftCard1 () {
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
          if(possibleAmounts.length === 0){
            dispatch(getCards(5,amount));
          } else if (possibleAmounts.length === 1){
            dispatch(getCards(5,possibleAmounts[0].value));
          }
          else {
            dispatch(getCards(5,selectedAmount));
          }
          setReset(true);
      }
      const handleReset = () => {
        window.location.reload(false);
      }
    return (
        <div className={classes.home}>
            <img src={gift} alt="Gift" className={classes.gauche}/>
            <div className={classes.droite}>
              <p className={classes.pageTitle}>GiftCard</p>
              <div style={{width: '50%'}}>
              {possibleAmounts.length === 0 || possibleAmounts.length === 1
                ? (<TextField
                    label="Set Amount"
                    variant='outlined'
                    value={possibleAmounts.length === 1 ? possibleAmounts[0].value : amount}
                    helperText={possibleAmounts.length === 1 ? 'Only this amount is possible' : null}
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
                  />)
                : (<TextField
                    fullWidth 
                    select
                    variant='outlined'
                    label="Select"
                    value={selectedAmount}
                    onChange={handleSelectedChange}
                    helperText="Please select your amount"
                  >
                    {possibleAmounts.map((option) => (
                      <MenuItem key={option.label} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>)
              }
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

export default GiftCard1;

