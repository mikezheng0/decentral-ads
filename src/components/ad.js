import React from "react"
import { Card, CardImage, HoverImageLink, HoverTitle } from "../styles"
import BuyModal from './modal'
import PlaceAd from './placeAd'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ShouldRenderEdit from './shouldEdit'

const ImageSampler = styled.div`
  width:100%;
  height:300px;
  background-color:darkgrey;
  display:flex;
  justify-content:center;
  align-items: center;
  color: white;
  font-size: 35px;
  text-transform: uppercase;
  border-radius: 8px;
`

const HoverButton = styled(BuyModal)`
  position: absolute;
  bottom: 8px;
  right: 8px;
`
const EditHoverButton = styled(BuyModal)`
  position: absolute;
  left: 8px;
  top: 8px;
`

const RenderImages = ({title, imageUrl, missingMessage}) => {
  if (imageUrl) {
    return <CardImage alt={title} src={imageUrl} />
  }
  return <ImageSampler>
    {missingMessage}
  </ImageSampler>
} 

const Advertisement = ({ ad, fullSize, handleClick, placeAd, editAd, missingMessage, currentValue}) => (
  <Card fullSize={fullSize}>
    <RenderImages
      title={ad.title}
      imageUrl={ad.imageUrl}
      missingMessage={missingMessage}/>
      
    <HoverImageLink href={ad.linkUrl}>
      <HoverTitle>{ad.title}</HoverTitle>
      { handleClick && 
        [
          <HoverButton handleClick={handleClick} buttonName="Buy This Ad" title="Buy an Ad" >
            <PlaceAd placeAd={placeAd} price={currentValue} submitText="Place Ad"/>
          </HoverButton>,
          <EditHoverButton handleClick={handleClick} buttonName="Edit This Ad" title="Edit your Ad" >
            <PlaceAd ad={ad} placeAd={editAd} price={currentValue} submitText="Edit Ad"/>
          </EditHoverButton>
        ]
      }
      <ShouldRenderEdit owner={ad.owner}/>
    </HoverImageLink>
  </Card>
)

const mapStateToProps = ({currentValue}) => ({currentValue})

export default connect(mapStateToProps)(Advertisement)
