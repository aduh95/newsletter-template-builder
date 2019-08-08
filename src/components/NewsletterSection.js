import { h, Component } from "preact";
import NewsletterArticle from "./NewsletterArticle";

export default class NewsletterSection extends Component {
  render() {
    const articles = this.props.content || [];
    return (
      <section
        className="newsletter"
        data-type="NewsletterSection"
        style={{ ["--nb-of-articles"]: articles.length }}
        id={this.props.id}
      >
        <output hidden data-key="id">
          {this.props.id}
        </output>
        <output hidden data-key="illustration">
          {this.props.illustration}
        </output>
        <output hidden data-key="illustrationDescription">
          {this.props.illustrationDescription}
        </output>

        <h2 className="newsletter" data-key="title">
          {this.props.title}
        </h2>
        {articles.map(article => (
          <NewsletterArticle {...article} />
        ))}
        <button
          data-ignore
          style="grid-column: span var(--nb-of-columns)"
          onClick={e =>
            import("../notify")
              .then(m => m.default)
              .then(notify => notify("Not implemented yet"))
          }
        >
          Add a new article
        </button>
      </section>
    );
  }
}
