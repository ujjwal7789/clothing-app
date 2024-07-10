import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: [{
                title: 'jackets',
                imageUrl: 'https://images.pexels.com/photos/7679798/pexels-photo-7679798.jpeg',
                id: 1
            },
        
            {
                title: 'denim',
                imageUrl: 'https://images.pexels.com/photos/1425249/pexels-photo-1425249.jpeg',
                id: 2
            },
        
            {
                title: 'footwear',
                imageUrl: 'https://images.pexels.com/photos/3987400/pexels-photo-3987400.jpeg',
                id: 3
            },
            
            {
                title: 'mens',
                imageUrl: 'https://images.pexels.com/photos/26384260/pexels-photo-26384260/free-photo-of-selfie-of-men-in-t-shirts.jpeg',
                size: 'large',
                id: 4
            },

            {
                title: 'womens',
                imageUrl: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
                size: 'large',
                id: 5
            }
            ] 
        }
    }


    render() {
        return (<div className='directory-menu'>
            {
                this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            
        </div>
        );
    }
}

export default Directory;