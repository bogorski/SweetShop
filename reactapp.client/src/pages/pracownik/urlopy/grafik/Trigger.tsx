import { Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export const Trigger = () => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            UW - urlop wypoczynkowy <br/>
            UŻ - Urlop wypoczynkowy na żądanie <br />
            eN - e-Nieobecność <br />
            UI - Inne nieobecności urlopowe <br />
            IN - Inne nieobecności
        </Tooltip>
    );

    return (
        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <Badge className="urlop mx-2">Nieobecność <FontAwesomeIcon icon={faQuestionCircle} /></Badge>
        </OverlayTrigger>
    );
}