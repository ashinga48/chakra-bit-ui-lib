import * as React from 'react';
import {Card} from './card';

import ThemeWrapper from "@resanec/ui.themewrapper/dist/themewrapper"

export const BasicCard = () => (
    <ThemeWrapper>
        <Card>
            <div> this is a sample child</div>
        </Card>
    </ThemeWrapper>
);