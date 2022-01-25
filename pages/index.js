/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://giffiles.alphacoders.com/214/214311.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "400px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "100%" },
              textAlign: "left",
              marginBottom: "32px",
            }}
          >
             <Image
              styleSheet={{
                width: "60px",
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${"becatriz"}.png`}
            />
            <Text
              variant="body3"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[300],
                marginBottom: '8px',
              }}
            >
              Rebeca Lopes convidou você para se juntar
            </Text>
            <Text
              variant="body1"
              styleSheet={{
                color: appConfig.theme.colors.neutrals["000"],
              }}
            >
              {appConfig.name}
            </Text>

            <Box
              styleSheet={{
                marginBottom: "22px",
              }}
            >
              <Text
                styleSheet={{
                  fontSize: "12px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    color: "green",
                    fontSize: "20px",
                  }}
                >
                  &#8226;
                </span>{" "}
                150 online
              </Text>

              <Text
                styleSheet={{
                  marginLeft: "20px",
                  fontSize: "12px",
                  color: appConfig.theme.colors.neutrals[300],
                }}
              >
                <span
                  style={{
                    color: "#FFFF",
                    fontSize: "20px",
                  }}
                >
                  &#8226;
                </span>{" "}
                1.257 membros
              </Text>
            </Box>

            <TextField
              label="NOME DE USUÁRIO"
              fullWidth
              size="xs"
              placeholder="Como o pessoal vai te chamar?"
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
              styleSheet={{
                textAlign: "left",
              }}
            />
            <Button
              type="submit"
              label="Continuar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
           
              <Text
                variant="body4"
                tag="a"
                styleSheet={{
                  marginTop: "10px",
                  color: appConfig.theme.colors.variant.primary[300],
                  width: { xs: "100%", sm: "100%" },
                  textAlign: "left",
                  marginBottom: '16px',
                }}
              >
                Já tem uma conta?
              </Text>

              <Text
                variant="body4"
                tag="a"
                styleSheet={{
                  marginTop: "10px",
                  color: appConfig.theme.colors.neutrals["400"],
                  width: { xs: "100%", sm: "100%" },
                  textAlign: "left",
                  
                }}
              >
                Ao se registar, você concorda com os <span style={{
                  color: appConfig.theme.colors.variant.primary[300]
                }}>termos de serviço</span> e a <span style={{
                  color: appConfig.theme.colors.variant.primary[300]
                }}>politica de privacidade</span> do Dashboard
              </Text>
           
          </Box>
        </Box>
      </Box>
    </>
  );
}
