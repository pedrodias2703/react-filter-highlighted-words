import React from 'react'
import { values } from 'lodash'
import { Button } from 'semantic-ui-react'


import ColorButton from '../button/ColorButton'
import { COLORS } from '../../../constants'

const BlockGroup = ({ role }) => (
    <Button.Group>{
        values(COLORS).map( color => (
            <ColorButton key={`${role}-${color}`} role={role} color={color} />
        ))
    }
    </Button.Group>
        
)

export default BlockGroup