import About from "../components/About";
import Authors from "../components/Authors";
import EpisodeFeatured from "../components/EpisodeFeatured";
import EpisodeList from "../components/EpisodeList/EpisodeList";
import Layout from "../components/Layout";
import Stack from "../components/Stack";

import { getAuthors } from "../lib/authors";
import { getEpisodes } from "../lib/episodes";
import { getSettings } from "../lib/settings";

const HomePage = ({ authors, episodes, settings }) => {
  const featuredEpisode = episodes.slice(0, 1)[0];
  const recentEpisodes = episodes.slice(1, episodes.length);

  return (
    <Layout footerMargin={false}>
      <Stack center>
        <EpisodeFeatured
          tagline="Neueste Folge"
          title={featuredEpisode.title}
          path={featuredEpisode.path}
          image={featuredEpisode.image}
          externalLinks={featuredEpisode.externalLinks}
          backgroundImage={settings?.image}
        />

        <EpisodeList episodes={recentEpisodes} />

        <div style={{ width: "100%" }}>
          <About {...settings} />
          <Authors authors={authors} />
        </div>
      </Stack>
    </Layout>
  );
};

export async function getStaticProps() {
  const authors = getAuthors();
  const episodes = getEpisodes(5);
  const settings = getSettings();

  return {
    props: {
      authors,
      episodes,
      settings,
    },
  };
}

export default HomePage;
