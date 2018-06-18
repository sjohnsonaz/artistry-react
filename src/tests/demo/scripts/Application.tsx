declare var window: any;

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Container, BodyScroll } from '../../../scripts/modules/ArtistryReact';

import ButtonView from './views/button/ButtonView';
import RangeView from './views/range/RangeView';
import ToggleView from './views/toggle/ToggleView';
import CalendarView from './views/calendar/CalendarView';
import ProgressBarView from './views/progressBar/ProgressBarView';
import MenuBarView from './views/menuBar/MenuBarView';
import ModalView from './views/modal/ModalView';
import SectionView from './views/section/SectionView';
import CarouselView from './views/carousel/CarouselView';
import TabView from './views/tab/TabView';
import TableView from './views/table/TableView';
import PagerView from './views/pager/PagerView';
import ListView from './views/list/ListView';
import FormView from './views/form/FormView';
import CodeView from './views/code/CodeView';
import DrawerView from './views/drawer/DrawerView';
import GridView from './views/grid/GridView';

export default class Application {
    static run() {
        ReactDom.render(
            <Container menuBarTop>
                <MenuBarView />
                <h2>Components</h2>
                <ButtonView />
                <RangeView />
                <ToggleView />
                <CalendarView />
                <ProgressBarView />
                <ModalView />
                <DrawerView />
                <SectionView />
                <CarouselView />
                <TabView />
                <TableView />
                <PagerView />
                <ListView />
                <FormView />
                <CodeView />
                <GridView />
            </Container>,
            document.getElementById('root'),
        );
    }
}
