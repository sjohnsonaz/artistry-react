import { addContext, block, rgba, Variables, Length, MediaContext, MediaType, query, px, value, Update, Media, AUTO, calc, rule, ROOT } from "@artistry/abstract";
import { getSettings, Box } from "artistry";
import { UnitNum } from "@artistry/abstract/dist/unit/Unit";

import { FORM_SPACING, FORM_TITLE_WIDTH } from './Form.variables';

export const FormStyle = addContext(() => {
    const base = getSettings();

    const Form = block('form');
    const Form__Row = Form.element('row', {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: '1fr',
        gap: value(FORM_SPACING),
        margin: value(FORM_SPACING)
    });
    const Form__LockScreen = Form.element('lock-screen');
    const Form__Group = Form.element('group',
        Box({
            margin: 1,
            width: px(680)
        })
    );
    const Form__Title = Form.element('title');
    const Form__Control = Form.element('control');
    const Form__Text = Form.element('text',
        Box({
            margin: 1,
        }), {
        paddingInlineStart: value(FORM_TITLE_WIDTH)
    });
    const Form__Input = Form.element('input');

    const Form$$XS = Form.modifier('xs', ...formStacked());
    const Form$$SM = Form.modifier('sm', formSize(base.sizes.small));
    const Form$$MD = Form.modifier('md', formSize(base.sizes.medium));
    const Form$$LG = Form.modifier('lg', formSize(base.sizes.large));
    const Form$$XL = Form.modifier('xl', formSize(base.sizes.xLarge));
    const Form$$Lock = Form.modifier('lock',
        Update({
            position: 'relative'
        }),
        Update(Form__LockScreen, {
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: rgba(0, 0, 0, 0.2) + '',
            zIndex: 100,
            verticalAlign: 'middle',
            textAlign: 'center'
        })
    );

    function formSize(maxWidth: Length) {
        let _maxWidth = maxWidth as UnitNum<Length>;
        return Media(query(MediaType.Screen, `(max-width: ${px(_maxWidth - 1)})`),
            ...formStacked()
        );
    }

    function formStacked() {
        return [
            Update(Form__Group, {
                gridTemplateColumns: '1fr',
                alignItems: 'start'
            }),
            Update(Form__Text, {
                paddingInlineStart: 0
            }),
            Update(Form__Title, {
                textAlign: 'start',
                margin: base.space(0.5, 0)
            }),
            Update(Form__Control, {
                gridRow: 'auto',
                gridColumn: 1
            }),
            Update(Form__Text, {
                gridRow: 'auto',
                gridColumn: 1
            })
        ];
    }

    return {
        Form,
        Form__Row,
        Form__LockScreen,
        Form__Group,
        Form__Title,
        Form__Control,
        Form__Text,
        Form__Input,
        Form$$XS,
        Form$$SM,
        Form$$MD,
        Form$$LG,
        Form$$XL,
        Form$$Lock
    };
});