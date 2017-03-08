import React, {PropTypes, Component} from 'react'
import Article from './Article'
import accordionList from '../decorators/accordionList'

class ArticleList extends Component {
    

    render() {
        const {articles} = this.props
        const {toggleOpenArticle, openArticleId} = this.props
        const articleComponents = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openArticleId}
                     toggleOpen={toggleOpenArticle(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }

    
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default accordionList(ArticleList)