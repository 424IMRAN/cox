/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Grid, makeStyles, Link} from '@material-ui/core'
import { NoEncryptionTwoTone } from '@material-ui/icons'
import LogoImage from '../../../assets/logo.png'
import LogoMicrosoft from '../../../assets/logoMicrosoft.png'
import theme, { COLORS } from '../../../core-utils/theme'
import ImageComponent from '../../atoms/CoxLogo'
import Typography from '../../atoms/Typography'
import ButtonComponent from '../../molecules/Button'

type LoginPageProps = {
  onClick: any
}

const useStyles = makeStyles(() => ({
  body: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(107.97deg, #009AE0 0%, #00A846 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    maxWidth: theme.spacing(90),
    padding: theme.spacing(9),
    borderRadius: theme.spacing(3),
    boxShadow: '80px 120px 504px rgba(0, 0, 0, 0.16)',
  },
  COXlogo: {
    display: 'flex',
    justifyContent: 'center',
  },
  COXcaption: {
    marginTop: '7px',
  },
  loginButton: {
    marginTop: '27px',
    borderColor: COLORS.TRANSPARENT_GREY_100,
  },
  MuiLinkUnderlineHover: {
    "&:hover": {
      textDecoration: 'none'+'!important'
    }
},
}))

const LoginPage = ({ onClick }: LoginPageProps) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.body} data-testid="loginTestId">
      <Card className={classes.card}>
        <Grid container>
          <Grid item xs={12} className={classes.COXlogo}>
            <ImageComponent
              imageSrc={LogoImage}
              alt="coxLogo"
              styles={{
                width: '138.23px',
                height: '43px',
              }}
            />
          </Grid>
          <Grid item xs={12} className={classes.COXcaption}>
            <Typography variant="caption2" align="center">
              DSS Fault Management Self Service
            </Typography>
          </Grid>
          <Grid item xs={12}>
          <Link href="/oauth2/authorization/azure" className="demoClass" color="inherit">
            <ButtonComponent
              variant="outlined"
              startIcon={
                <ImageComponent
                  imageSrc={LogoMicrosoft}
                  alt="coxLogo"
                  styles={{
                    width: '17px',
                    height: '17px',
                    marginRight: theme.spacing(1),
                  }}
                />
              }
              fullWidth
              className={classes.loginButton}
              customStyles={{ borderRadius: '0px' }}
              onClick={onClick}
            >
              <Typography
                variant="caption2"
                styles={{ color: COLORS.TEXT_500 }}
              >
                Sign in with Microsoft
              </Typography>
            </ButtonComponent>
            </Link>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default LoginPage
