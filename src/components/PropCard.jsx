/* eslint-disable react/prop-types */
import React from 'react'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Link,
  Divider,
} from '@mui/material'

const PropCard = ({ title, image, description, link, unitTotal = 105 }) => {
  // Adjust default height as needed
  return (
    <Link href={link} target='_blank' underline='none'>
      <Card sx={{ height: '100%' }}>
        <CardActionArea>
          <CardMedia component='img' image={image} alt={title} height='140' />
          <CardContent>
            <Typography
              variant='subtitle1'
              color='text.primary'
              sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary' noWrap>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions sx={{ backgroundColor: '#F8F9FA' }}>
          <Typography sx={{ color: 'grey', fontSize: 12 }}>
            {unitTotal} units
          </Typography>
        </CardActions>
      </Card>
    </Link>
  )
}

export default PropCard
