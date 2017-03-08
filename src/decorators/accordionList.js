import React from 'react'

export default(CustomComponent) => class DecoratedComponent extends React.Component {

    static displayName = 'ComponentDecoratedWithAccordionList';

    state = {
        openArticleId: null
    }

    toggleOpenArticle = openArticleId => ev => {
        this.setState({openArticleId})
    }

    render() {
        return <CustomComponent
            {...this.props}
            {...this.state}
            toggleOpenArticle={this.toggleOpenArticle}/>
    }

}