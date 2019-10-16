import { h } from "../utils/jsx.js";
import { FontAwesomeIcon } from "@aduh95/jsx-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

function FeatureStoriesNav({ addSection, editSection, sections }) {
  console.log("render");
  return (
    <nav class="newsletter" data-ignore>
      {sections.map(section => (
        <a
          href={"#" + section.id}
          data-link-to-edit
          onClick={editSection(section)}
        >
          <img
            src={section.illustration}
            alt={section.illustrationDescription}
          />
        </a>
      ))}
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
        data-link-to-create
        data-do-not-export
        onClick={addSection}
      >
        <FontAwesomeIcon icon={faFolderPlus} size="2x" />
      </a>
    </nav>
  );
}

FeatureStoriesNav.prototype = null;
export default FeatureStoriesNav;
