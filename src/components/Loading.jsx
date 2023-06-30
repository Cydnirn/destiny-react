import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    font-size: 24px;
    margin: 0;
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-color: #f1f1f1;

    @media only screen and (max-width: 600px) {
        font-size: 16px;
    }
`;

const LoadingContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 14em;
    width: 14em;

    &.default {
        .c1 {
            height: 10em;
            width: 10em;
            transition: all 2s ease-in-out;
        }

        .c2 {
            height: 9em;
            width: 9em;
            transition: all 2s ease-in-out;
        }

        .c3 {
            height: 9em;
            width: 9em;
            transition: all 2s ease-in-out;
        }

        .c4 {
            height: 8em;
            width: 8em;
            transition: all 2s ease-in-out;
        }

        .shape-group {
            transition: height 2s ease-in-out;

            .shape {
                transition: transform 2s ease-in-out,
                    border-bottom-color 0.75s ease-in 1.25s;
                border-bottom-color: #f1f1f1;
                transform: rotate(180deg);
            }
        }

        .line-group {
            transition: all 2s ease-in-out;

            .line {
                transition: all 2s ease-in-out;
            }

            &.g1 {
                height: 15em;
                width: 6em;
            }

            &.g2 {
                height: 15em;
                width: 7.75em;
                transform: rotate(-60deg);
            }

            &.g3 {
                height: 15em;
                width: 7.75em;
                transform: rotate(60deg);
            }
        }
    }

    &.warlock {
        .c1 {
            height: 6.25em;
            width: 6.25em;
            transition: all 2s ease-in-out;
        }

        .c2 {
            height: 4em;
            width: 4em;
            transition: all 2s ease-in-out;
        }

        .c3 {
            height: 12.5em;
            width: 12.5em;
            transition: all 1s ease-in-out 1s;
        }

        .c4 {
            height: 11.5em;
            width: 11.5em;
            transition: all 1s ease-in-out 1s;
        }

        .shape-group {
            .shape {
                transition: transform 2s ease-in-out,
                    border-bottom-color 0.75s ease-in 1.25s;

                &.s1,
                &.s4 {
                    transform: rotate(0) translate(-1.15em, 0.5em);
                }

                &.s2,
                &.s5 {
                    transform: rotate(360deg) translate(0, 0.5em);
                }

                &.s3,
                &.s6 {
                    transform: rotate(360deg) translate(1.15em, 0.5em);
                }
            }
        }

        .line-group {
            transition: all 2s ease-in-out;

            .line {
                transition: all 2s ease-in-out;
                box-shadow: 0 0 0 2px $color-background;
            }

            &.g1 {
                height: 15em;
                width: 6em;
                transform: rotate(-90deg);

                .l2,
                .l3 {
                    opacity: 0;
                }
            }

            &.g2 {
                height: 15em;
                width: 4em;
                transform: rotate(-150deg);

                .l1 {
                    left: 50%;
                }
                .l2 {
                    left: 74%;
                }
                .l3 {
                    left: 77%;
                }
                .l4 {
                    left: 100%;
                }
            }

            &.g3 {
                height: 15em;
                width: 4em;
                transform: rotate(150deg);

                .l1 {
                    left: 0%;
                }
                .l2 {
                    left: 24%;
                }
                .l3 {
                    left: 27%;
                }
                .l4 {
                    left: 50%;
                }
            }
        }
    }

    &.titan {
        .c1 {
            height: 10.5em;
            width: 10.5em;
            transition: all 2s ease-in-out;
        }

        .c2 {
            height: 10em;
            width: 10em;
            transition: all 2s ease-in-out;
        }

        .c3 {
            height: 12em;
            width: 12em;
            transition: all 1s ease-in-out 1s;
        }

        .c4 {
            height: 11em;
            width: 11em;
            transition: all 1s ease-in-out 1s;
        }

        .shape-group {
            .shape {
                transition: transform 2s ease-in-out;

                &.s1 {
                    transform: rotate(-90deg) scale(0.535)
                        translate(-3.1em, -2.5em);
                }

                &.s2 {
                    transform: rotate(270deg) scale(0.535)
                        translate(3.1em, -2.5em);
                }

                &.s3 {
                    transform: rotate(270deg) scale(0.485) translate(0, 3em);
                }

                &.s4 {
                    transform: rotate(90deg) scale(0.485) translate(0, 3em);
                }

                &.s5 {
                    transform: rotate(450deg) scale(0.535)
                        translate(-3.1em, -2.4em);
                }

                &.s6 {
                    transform: rotate(450deg) scale(0.535)
                        translate(3.1em, -2.4em);
                }
            }
        }

        .line-group {
            transition: all 2s ease-in-out;

            .line {
                transition: all 2s ease-in-out;
            }

            &.g1 {
                height: 15em;
                width: 5.25em;
                transform: rotate(-180deg);

                .l2,
                .l3 {
                    opacity: 0;
                }
            }

            &.g2 {
                height: 15em;
                width: 5.5em;
                transform: rotate(-240deg);

                .l1 {
                    left: 0%;
                }
                .l2 {
                    left: 48%;
                }
                .l3 {
                    left: 52%;
                }
                .l4 {
                    left: 100%;
                }
            }

            &.g3 {
                height: 15em;
                width: 5.5em;
                transform: rotate(240deg);

                .l1 {
                    left: 0%;
                }
                .l2 {
                    left: 48%;
                }
                .l3 {
                    left: 52%;
                }
                .l4 {
                    left: 100%;
                }
            }
        }
    }

    &.hunter {
        .c1 {
            height: 5.5em;
            width: 5.5em;
            transition: all 2s ease-in-out;
        }

        .c2 {
            height: 4em;
            width: 4em;
            transition: all 2s ease-in-out;
        }

        .c3 {
            height: 9em;
            width: 9em;
            transition: all 2s ease-in-out;
        }

        .c4 {
            height: 8em;
            width: 8em;
            transition: all 2s ease-in-out;
        }

        .shape-group {
            transition: height 2s ease-in-out;
            height: 6em;

            .shape {
                transition: all 2s ease-in-out,
                    border-bottom-color 0.75s ease-in 1.25s;

                &.s1 {
                    transform: rotate(0deg) scale(0.83) translate(0, 1.2em);
                }

                &.s2 {
                    transform: rotate(360deg) scale(0.83) translate(0, -3.6em);
                }

                &.s3 {
                    transform: rotate(360deg) scale(0.83) translate(0, -1.2em);
                }

                &.s4 {
                    border-bottom-color: $color-background;
                    transform: rotate(0deg) scale(0.4) translate(0, 0);
                }

                &.s5 {
                    border-bottom-color: $color-background;
                    transform: rotate(360deg) scale(0.4) translate(0, -5em);
                }

                &.s6 {
                    border-bottom-color: $color-background;
                    transform: rotate(360deg) scale(0.4) translate(0, 5em);
                }
            }
        }

        .line-group {
            transition: all 2s ease-in-out;

            .line {
                transition: all 2s ease-in-out;
            }

            &.g1 {
                height: 15em;
                width: 6em;
                transform: rotate(-270deg);
            }

            &.g2 {
                height: 15em;
                width: 5em;
                transform: rotate(-330deg);

                .l1 {
                    left: 0%;
                }
                .l2 {
                    left: 20%;
                }
                .l3 {
                    left: 40%;
                    z-index: -1;
                }
                .l4 {
                    left: 60%;
                    z-index: -1;
                }
            }

            &.g3 {
                height: 15em;
                width: 5em;
                transform: rotate(330deg);

                .l1 {
                    left: 40%;
                }
                .l2 {
                    left: 60%;
                }
                .l3 {
                    left: 80%;
                }
                .l4 {
                    left: 100%;
                }
            }
        }
    }
`;

const Circle = styled.div`
    position: absolute;
    border-radius: 50%;
    border: 1px solid #363636;
    z-index: 1;
`;

const Shapes = styled.div`
    position: absolute;
    display: grid;
    place-items: center;
    height: 8em;
    width: 8em;
    overflow: hidden;
`;

const Shape = styled.div`
    position: absolute;
    border-left: 2.85em solid transparent;
    border-right: 2.85em solid transparent;
    border-bottom: 4.9em solid #363636;
`;

const Lines = styled.div`
    position: absolute;
`;

const Line = styled.div`
    position: absolute;
    height: 100%;
    width: 1px;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        #363636 20%,
        #363636 80%,
        transparent 100%
    );

    &.l1 {
        left: 0;
    }

    &.l2 {
        left: 33%;
    }

    &.l3 {
        left: 67%;
    }

    &.l4 {
        left: 100%;
    }
`;

function Loading() {
    const [index, setIndex] = useState(0);
    const classnames = ["default", "warlock", "titan", "hunter"];

    function changeIndex() {
        setIndex((prev) => {
            prev = prev < classnames.length - 1 ? prev + 1 : 0;
            return prev;
        });
    }

    useEffect(() => {
        const time = setTimeout(changeIndex, 3000);
        return () => clearTimeout(time);
    });

    return (
        <Container onClick={changeIndex}>
            <LoadingContainer className={classnames[index]}>
                <Circle className='c1' />
                <Circle className='c2' />
                <Circle className='c3' />
                <Circle className='c4' />
                <Shapes className='shape-group'>
                    <Shape className='shape s1' />
                    <Shape className='shape s2' />
                    <Shape className='shape s3' />
                    <Shape className='shape s4' />
                    <Shape className='shape s5' />
                    <Shape className='shape s6' />
                </Shapes>
                <Lines className='line-group g1'>
                    <Line className='line l1' />
                    <Line className='line l2' />
                    <Line className='line l3' />
                    <Line className='line l4' />
                </Lines>
                <Lines className='line-group g2'>
                    <Line className='line l1' />
                    <Line className='line l2' />
                    <Line className='line l3' />
                    <Line className='line l4' />
                </Lines>
                <Lines className='line-group g3'>
                    <Line className='line l1' />
                    <Line className='line l2' />
                    <Line className='line l3' />
                    <Line className='line l4' />
                </Lines>
            </LoadingContainer>
        </Container>
    );
}

export default Loading;
