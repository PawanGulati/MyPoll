import React from 'react'

import { Doughnut } from 'react-chartjs-2';

export default props =>{

    const data = (Object.keys(props.poll).length!==0) ? {
        datasets: [{
            data: props.poll.options.map(option =>{
                return option.votes
            }),
            backgroundColor: props.poll.options.map(option =>{
                return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
            })
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: props.poll.options.map(option =>{
            return option.option
        })
    } : {}

    const options = {
        maintainAspectRatio: false	// Don't maintain w/h ratio
    }

    const legend = {
        labels:{
            fontSize:20,
            fontColor:'#FFC400',
            boxWidth:60,
            // padding:20
        }
    } 
    
    return <>
        <Doughnut
            data={data}
            options={options}
            legend={legend}
        />
    </>
}
