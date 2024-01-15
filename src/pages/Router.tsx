import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "../components/privateRoute";
const Home = lazy(() => import("./home"));
const Playlists = lazy(() => import("./playlists"));
const Likes = lazy(() => import("./likes"));
const Browse = lazy(() => import("./browse"));
const Podcasts = lazy(() => import("./podcasts"));
const Loader = lazy(() => import("../components/loader"));

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="*" Component={() => <div>Fabio</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Router;
