module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"
        ],
      },
      {
        resolve: { extensions: ['.js', '.jsx'] },
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ["@babel/plugin-transform-runtime"],
            presets: ['@babel/preset-react', '@babel/preset-env']
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};