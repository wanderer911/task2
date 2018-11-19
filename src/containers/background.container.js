import React from 'react'
import ColorPicker from 'wix-style-react/ColorPicker'

export class BackgroundContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        const {  imageType,color,changeColorBackground  } = this.props
        return (
            <div data-hook={imageType}>
                Hello background with {imageType}
                {color && <div>
                    <ColorPicker
                        onCancel={() => "Cancelled"}
                        onChange={e => e.hex()}
                        onConfirm={changeColorBackground}
                        showConverter={false}
                        value={color}
                    />
                    <label for="isBackgroundTabOpen">Color</label>
                </div>}
            </div>
        )
    }
}


