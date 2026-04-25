import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Reveal, { fadeUp, staggerContainer } from "./Reveal";

export default function Github() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/Pabasara2002/repos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 6));
          return;
        }
        setError(true);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            GitHub
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Recent repositories 
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            A repository section that keeps cards readable on small screens and expands into a
            larger grid on wider layouts.
          </p>
        </Reveal>

        <motion.div
          className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {repos.map((repo) => (
            <motion.article
              key={repo.id}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6"
              whileHover={{ y: -7 }}
            >
              <h3 className="text-lg font-semibold text-white sm:text-xl">{repo.name}</h3>
              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-300">
                {repo.description || "Repository details available on GitHub."}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {repo.language || "Code"}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                >
                  View Repo
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {error ? (
          <motion.p
            className="mt-6 text-sm text-amber-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            GitHub repositories could not be loaded right now. The rest of the portfolio still
            works normally.
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
