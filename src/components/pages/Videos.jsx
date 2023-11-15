import React, { useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';

function Videos() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 8;
    const maxResults = 50000;

    useEffect(() => {
        const fetchYouTubeVideos = async () => {
            try {
                const API_KEY = 'AIzaSyAcAj5fRd3KyWx7vMmjP3_t9O2ujeQTLfs';
                const CHANNEL_ID = 'UCueYcgdqos0_PzNOq81zAFg';
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=${maxResults}&channelId=${CHANNEL_ID}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch YouTube videos');
                }

                const data = await response.json();
                setVideos(data.items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching YouTube videos:', error.message);
                setLoading(false);
            }
        };

        fetchYouTubeVideos();
    }, []);

    const playVideo = (videoId) => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    };

    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Header />
            <div className="rs-breadcrumbs bg-6">
                <div className="container">
                    <div className="content-part text-center">
                        <h1 className="breadcrumbs-title white-color mb-0">Videos</h1>
                    </div>
                </div>
            </div>
            <div className="rs-portfolio style3 pt-92 md-pt-72 pb-148 lg-pb-133 md-pb-51">
                <div className="container">
                    {loading ? (
                        <h5><b>Loading...</b></h5>
                    ) : videos.length === 0 ? (
                        <h5><b>No videos available</b></h5>
                    ) : (
                        <>
                            <Row>
                                {currentVideos.map((video, index) => (
                                    <Col lg={3} md={6} key={index}>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id={`tooltip-${index}`}>{video.snippet.title}</Tooltip>}
                                        >
                                            <Card className="mb-4" style={{ height: '340px' }} >
                                                <Card.Img
                                                    variant="top"
                                                    src={video.snippet.thumbnails.medium.url}
                                                    alt={video.snippet.title}
                                                />
                                                <Card.Body>
                                                    <Card.Title>
                                                        <a
                                                            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{ color: "rgb(17 38 134)", fontSize: "15px" }}
                                                        >
                                                            {video.snippet.title.slice(0, 40)}
                                                        </a>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <span className="categories">
                                                            <a
                                                                href={`https://www.youtube.com/channel/${video.snippet.channelId}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={{ color: "rgb(17 38 134)" }}
                                                            >
                                                                {video.snippet.channelTitle}
                                                            </a>
                                                        </span>
                                                    </Card.Text>
                                                    <button
                                                        className="btn btn-primary btn-sm"
                                                        onClick={() => playVideo(video.id.videoId)}
                                                        style={{ background: "rgb(17 38 134)" }}
                                                    >
                                                        <i className="fa fa-play"></i>
                                                    </button>
                                                </Card.Body>
                                            </Card>
                                        </OverlayTrigger>
                                    </Col>
                                ))}
                            </Row>
                            <div className="text-center mt-4">
                                <Pagination>
                                    {[...Array(Math.ceil(videos.length / videosPerPage)).keys()].map((number) => (
                                        <Pagination.Item
                                            key={number + 1}
                                            active={number + 1 === currentPage}
                                            onClick={() => handlePageChange(number + 1)}
                                        >
                                            {number + 1}
                                        </Pagination.Item>
                                    ))}
                                </Pagination>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Videos;
