const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const userRoutes = require('./routes/userRoutes')
const errorHandler = require('./middlewares/errorMiddleware')
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./swagger.json')

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(morgan('dev'))

app.use('/api/users', userRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(errorHandler)

module.exports = app