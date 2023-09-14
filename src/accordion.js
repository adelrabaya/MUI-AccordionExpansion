import {Accordion} from '@mui/material/';
import {AccordionSummary} from '@mui/material';
import {AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Typography} from '@mui/material';

const Accord = ( {title,body}) => {
    return ( 
        <Accordion defaultExpanded={false} >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{body}</Typography>
                    </AccordionDetails>
        </Accordion>
     );
}
 
export default Accord;